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

## ✅ ÇÖZÜLEN BLOCKER

### ✅ Blocker 2 — Waitlist backend CANLI
Yeni Supabase projesi kuruldu ve bağlandı: **`nsjbwadklqmresyqcfuk`** (eski `lnfgtcgnacmubnovzexi` terk edildi).
- Tablo oluşturuldu (migration), edge function deploy edildi (`--no-verify-jwt`, `index.ts` + Hono `basePath('/server')`), `ADMIN_TOKEN` set edildi.
- Frontend yeni projeye bağlandı (`.env` + `src/lib/supabase.ts` / `.env.example` / `utils/supabase/info.tsx` fallback'leri).
- **Doğrulandı:** health 200 · count 200 · signup 201 · duplicate 409 · rate-limit 429 · CORS (localhost:5173 + nativeway.app ✓, izinsiz origin engelli) · admin auth 401.
- ⚠️ **Yapılacak (küçük):** test kayıtlarını temizle (launch sayacı temiz olsun):
  `DELETE FROM waitlist WHERE email LIKE '%@example.com';`  (SQL Editor)

### 🟡 should-fix — Frontend (HEPSİ TAMAM ✅)
- ✅ **Light-mode kontrast AA** — buton 2.78→6.42:1, accent metin 2.42→4.88:1 (yeni `--nw-accent-text`). `d006635`
- ✅ **Sabit İngilizce metinler** — CTA/CookieBanner/404 → 4 dile taşındı. `2058589`
- ✅ **Waitlist sayaç hataları** — 409 artık sayacı şişirmiyor; optimistic +1'i ezen refresh kaldırıldı. `8628e88`
- ✅ **Router `errorElement`** — markalı `RouteError` root route'a eklendi. `8628e88`
- ✅ **SEO ufak** — 404 noindex, `/admin` noindex + robots Disallow, anasayfada çift JSON-LD giderildi. `8628e88`
- ✅ **tr timeline** — duplicate "2026" milestone kaldırıldı (6→5). `8628e88`

### 🟡 should-fix — Edge function (KOD TAMAM ✅ — yeni deploy'da otomatik geçerli)
- ✅ **CORS** — `www.` eklendi + `ALLOWED_ORIGINS` env ile ayarlanabilir. `f719c2d`
- ✅ **Rate limiter** — süresi dolan kayıtlar temizleniyor (bellek sızıntısı giderildi). `f719c2d`
- ✅ **Admin token** — artık `x-admin-token` header'ında (URL/loglardan çıktı). `f719c2d`

### 🟢 minor (opsiyonel)
Eskimiş tarihler (2025-07-09), CTA başarı mesajı SR'a duyurulmuyor (`role="status"`),
Norveççe metinde Kiril bozulması (`visumсекsjonen`→`visumseksjonen`), tema FOUC flash'ı,
kullanılmayan i18n key'leri, çevrilmemiş a11y label'ları, ana JS bundle 634KB/197KB gzip
(code-split edilebilir), phone/phone3 hâlâ ~760KB (daha küçültülebilir), çift lockfile
(`package-lock.json` npm artığı — pnpm projesi).

---

## 🚦 RELEASE İÇİN GEREKENLER (minimum gate)

1. **[x] Blocker 2 — waitlist backend** ✅ CANLI ve bağlı (`nsjbwadklqmresyqcfuk`), uçtan uca doğrulandı
2. **[ ] Blocker 6'yı kabul et** — zh/no yasal sayfalar İngilizce fallback ile çıkıyor (profesyonel çeviri sonradan)
3. **[ ] Host'u doğrula** — `_redirects` (Cloudflare/Netlify) veya `vercel.json` (Vercel) hedef host'la eşleşiyor mu
4. **[ ] `dev` → `main` merge** — release main'den alınacaksa (şu an dev, main'in önünde)
5. **[x] 🟡 should-fix'ler** — frontend + edge-function should-fix'lerin HEPSİ tamam ✅
6. **[ ] Domain al** (`nativeway.app` önerilir — koda birebir uyar) + prod env (`VITE_SUPABASE_URL/ANON_KEY`) + edge `ADMIN_TOKEN`

**Karar:** Tek kalan zorunlu iş **hosting seçip deploy** (Blocker 6 kabulü + host rewrite doğrulama + domain).
Kod + backend hazır. Build/tsc/lint temiz, testler 3/3, waitlist uçtan uca çalışıyor.

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
