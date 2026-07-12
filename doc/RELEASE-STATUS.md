# NativeWay — Release Durum Notu

> Son güncelleme: 2026-07-12 · Branch: `dev` · Hazırlayan: prod-readiness denetimi (Claude + Said)
> Release planı: `dev` → `main` merge (arkadaş merge edip release alacak)

Bu doküman production'a hazırlık denetiminin sonucunu, yapılanları, kalanları ve
release için gerekenleri tek yerde toplar. Backend deployment adımları için ayrıca
bkz. [`deployment.md`](./deployment.md).

---

## ✅ Bu oturumda YAPILANLAR (hepsi `origin/dev`'de)

Denetim: 3 paralel statik-analiz ajanı + gerçek Chrome'da 10 route'un runtime testi
(build/tsc/lint temiz, hiç crash yok, FCP ~100–400ms).

| Commit | İş |
|---|---|
| `dc454d7` | **Scroll jank fix** — CSS `scroll-behavior: smooth` (JS rAF ile çakışıyordu) kaldırıldı; 900→550ms; Navbar `backdrop-blur-md` (her-frame repaint) kaldırıldı |
| `9831a5c` | **Görsel optimizasyonu** — logo 1536px→480px (2.3MB→72KB), phone4 2426px→1024px (5.4MB→1.1MB). Asıl scroll-FPS sebebi devasa decode-bitmap'lerdi |
| `31848b2` | **Blocker 1 — Ana CTA fix** — Navbar "Erken Erişim" (`/#get-app`) hiçbir şey yapmıyordu; Root'a hash-scroll handling eklendi. Runtime doğrulandı (forma kayıyor) |
| `8fe1815` | **Blocker 3 + 5** — prerender Chrome yoksa build'i kırmıyor (CI-safe); `_redirects` + `vercel.json` (derin-link 404 fix) |
| `4a4b272` | **Blocker 4** — eksik `favicon.png` / `apple-touch-icon.png` / `og-image.png` üretildi (marka uyumlu) |
| `d2a1979` | **Blocker 6** — zh/no yasal sayfalar tam İngilizce içerik + "yalnızca İngilizce" notu (önceden 2 bölümlük stub'du) |

**Sonuç:** 6 release-blocker'ından **5'i kod tarafında kapatıldı ve doğrulandı.**

---

## ⏳ KALANLAR

### 🔴 Tek gerçek blocker — senin aksiyonun
- **Blocker 2 — Waitlist backend deploy edilmemiş.** Tüm edge-function endpoint'leri 404
  ("load failed" sebebi bu). Kod hazır, sadece Supabase panosundan deploy gerekiyor:
  1. SQL Editor → `supabase/migrations/001_create_waitlist.sql` → Run
  2. Edge Functions → `server` adıyla oluştur → `supabase/functions/server/index.tsx` → Deploy
  3. `ADMIN_TOKEN` env ekle → Redeploy
  4. localhost:5173'ten test (CORS zaten izinli). Detay: `deployment.md`.

### 🟡 should-fix — Frontend
- ✅ **Light-mode kontrast AA fail** — DÜZELTİLDİ: buton 2.78→6.42:1, accent metin 2.42→4.88:1 (yeni `--nw-accent-text` token). Commit `d006635`
- ✅ **Sabit İngilizce metinler** — DÜZELTİLDİ: CTA hataları+"Joining...", CookieBanner, 404 → 4 dile taşındı; 404'e noindex de eklendi. Commit `2058589`
- ⏳ **Waitlist sayaç hataları** — optimistic +1 arkadan gelen refresh ile eziliyor; 409 (zaten kayıtlı) sayacı yine artırıyor
- ⏳ **Router `errorElement` yok** — sayfa hatasında React Router'ın çirkin varsayılan ekranı çıkar
- ⏳ **SEO ufak** — (404 indexlenebilir ✅ düzeltildi); `/admin` noindex değil; anasayfada JSON-LD çift
- ⏳ **tr timeline** — About'ta Türkçe'de fazladan duplicate "2026" milestone

### 🟡 should-fix — Edge function (kod düzeltilir ama function redeploy'unda geçerli; henüz YAPILMADI)
- **CORS dar** — sadece `nativeway.app` + localhost; `www.` ve preview domainleri eklenmeli
- **Rate limiter** — X-Forwarded-For ile bypass edilebilir + bellek sızıntısı (eviction yok)
- **Admin token URL'de** — edge loglarına düşüyor; `Authorization` header'a taşınmalı

### 🟢 minor (opsiyonel)
Eskimiş tarihler (2025-07-09), CTA başarı mesajı SR'a duyurulmuyor (`role="status"`),
Norveççe metinde Kiril bozulması (`visumсекsjonen`→`visumseksjonen`), tema FOUC flash'ı,
kullanılmayan i18n key'leri, çevrilmemiş a11y label'ları, ana JS bundle 634KB/197KB gzip
(code-split edilebilir), phone/phone3 hâlâ ~760KB (daha küçültülebilir), çift lockfile
(`package-lock.json` npm artığı — pnpm projesi).

---

## 🚦 RELEASE İÇİN GEREKENLER (minimum gate)

1. **[ ] Blocker 2 — backend deploy** (senin Supabase adımın) → sonra localhost'tan uçtan uca test
2. **[ ] Blocker 6'yı kabul et** — zh/no yasal sayfalar İngilizce fallback ile çıkıyor (profesyonel çeviri sonradan)
3. **[ ] Host'u doğrula** — `_redirects` (Cloudflare/Netlify) veya `vercel.json` (Vercel) hedef host'la eşleşiyor mu
4. **[ ] `dev` → `main` merge** — release main'den alınacaksa (şu an dev, main'in 7 commit önünde)
5. **(önerilir) 🟡 frontend should-fix'leri** — özellikle **kontrast** + **sabit metinler** (kalite için)

**Karar:** Blocker 2 kapanınca + host doğrulanınca teknik olarak yayına çıkılabilir.
🟡 kontrast ve sabit-metin düzeltmeleri "kaliteli lansman" için güçlü şekilde önerilir.

---

## 📌 Önemli notlar / açık kararlar

- **`dev` vs `main` sapması:** `dev`, `origin/main`'in **7 commit önünde**. `main`'de admin-waitlist
  özelliği (`5345895`) merge edilip **revert edilmiş** (`f065d82`) — yani o özellik main'de yok, dev'de var.
  Release main'den ise bu netleştirilmeli.
- **Said'in pushlanmamış işi korundu:** Fiyatlandırma sayfası + waitlist + analytics (25 Haziran, commit
  `68afca5`) `origin/dev`'de yoktu; **`said-pricing-work`** branch'ine ve **`backup/dev-said-2026-06-25`**
  tag'ine yedeklendi. Bu işin release'e girip girmeyeceği ayrı bir karar.
- **Waitlist reklam-amacı yeniden çerçeveleme (ERTELENDİ):** "Erken erişim/ücretsiz premium" yerine
  "lansmanda haber ver, çıktığı gün indir" mantığı istendi. Backend değişmiyor; ~%90 metin (i18n)
  değişikliği. Blocker'lardan sonra yapılacak.
- **Yedekler:** orijinal büyük görseller scratchpad'de yedeklendi (bu oturuma özel, kalıcı değil).
