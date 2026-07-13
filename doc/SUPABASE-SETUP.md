# Sıfırdan Supabase Kurulumu (Yeni Proje)

> Waitlist / erken-erişim backend'ini yeni bir Supabase hesabında baştan kurmak için adım adım kılavuz.
> Kod tarafı hazır; burada sadece **senin panodan yapacağın** işler var. Eski proje (`lnfgtcgnacmubnovzexi`) terk ediliyor.

---

## 1. Yeni proje oluştur
1. https://supabase.com/dashboard → **New Project** (isim, bölge, DB şifresi seç).
2. Açılınca **Settings → API**'den şunları not al:
   - **Project URL** → `https://<yeni-ref>.supabase.co`
   - **anon / public** key → client'ta kullanılabilir (gizli değil)
   - **service_role** key → GİZLİ; kopyalamana gerek yok, edge function'a otomatik gelir

## 2. Waitlist tablosunu oluştur
- **SQL Editor → New query** → `supabase/migrations/001_create_waitlist.sql` içeriğini yapıştır → **Run**.
- "Success" görmelisin (tablo + `email UNIQUE` + RLS + anon insert policy hazır gelir).

## 3. Edge function'ı deploy et

**Yol A — CLI (önerilen; Deno `npm:`/`jsr:` import'ları için en güvenilir):**
```bash
npm i -g supabase           # veya: brew install supabase/tap/supabase
supabase login
supabase link --project-ref <yeni-ref>
supabase functions deploy server --no-verify-jwt
```

**Yol B — Dashboard:**
- **Edge Functions → Create function** → isim tam olarak **`server`** → `supabase/functions/server/index.ts` içeriğini yapıştır → **Deploy**.
- Fonksiyon ayarlarında **"Verify JWT" seçeneğini KAPAT**.

> ⚠️ **`--no-verify-jwt` / Verify JWT kapalı ŞART:** Frontend (CTA kaydı ve sayaç) auth header göndermeden çağırıyor, yani fonksiyon public olmalı. Admin ucu zaten kendi içinde `ADMIN_TOKEN` ile korunuyor.

## 4. Env / Secrets (edge function)
`server` fonksiyonu → **Settings / Secrets**:
| Key | Değer |
|---|---|
| `ADMIN_TOKEN` | Güçlü rastgele bir değer (admin paneline giriş için) |
| `ALLOWED_ORIGINS` *(opsiyonel)* | `https://SENIN-DOMAIN,https://www.SENIN-DOMAIN,http://localhost:5173` |

> `SUPABASE_URL` ve `SUPABASE_SERVICE_ROLE_KEY` → Supabase bunları edge function'a **otomatik** sağlar, elle ekleme.

## 5. Frontend'i yeni projeye bağla
Frontend `import.meta.env.VITE_SUPABASE_URL || <fallback>` okuyor. En temizi repo kökünde **`.env`** (zaten `.gitignore`'da):
```
VITE_SUPABASE_URL=https://<yeni-ref>.supabase.co
VITE_SUPABASE_ANON_KEY=<yeni-anon-key>
```
Ayrıca şu 3 dosyadaki **eski proje referansları** güncellenmeli (`.env` yoksa bunlar fallback olur):
- `src/lib/supabase.ts` — fallback URL + anon key
- `.env.example`
- `utils/supabase/info.tsx` — (auto-generated, eski projeyi işaret ediyor)

> Prod build'de hosting'e de `VITE_SUPABASE_URL` / `VITE_SUPABASE_ANON_KEY` env'lerini ekle (yoksa fallback kullanılır).
> İstersen yeni URL + anon key'i bana ver, bu 3 dosyayı ben güncelleyeyim.

## 6. Test (localhost'tan — siteyi prod'a almadan)
```bash
npm run dev        # localhost:5173 (CORS zaten izinli)
```
- [ ] CTA'ya mail gir → **201**; aynı mail tekrar → **409**; 4 hızlı istek → **429**
- [ ] Hero sayacı gerçek sayıyı gösteriyor
- [ ] `/admin` → `ADMIN_TOKEN` gir → kayıt listesi geliyor (token artık URL'de değil, `x-admin-token` header'ında)

---

**Özet:** 2 (tablo) → 3 (deploy, verify-jwt kapalı) → 4 (ADMIN_TOKEN) → 5 (frontend'i bağla) → 6 (localhost test). Takılırsan hangi adım olduğunu söyle.
