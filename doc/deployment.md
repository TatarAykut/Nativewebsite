# Backend Tamamlama ve Deployment Kılavuzu

> Bu doküman NativeWay sitesinin backend eksikliklerinin nasıl giderildiğini ve kalan deployment adımlarını içerir.

---

## Yapılan Değişiklikler (Kod Tarafı — Tamamlandı ✅)

### 1. Edge Function API'leri (`supabase/functions/server/index.ts`)

Eski durumda sadece health check endpoint'i vardı. Aşağıdaki endpoint'ler eklendi:

| Endpoint | Açıklama |
|---|---|
| `POST /api/waitlist` | Waitlist kaydı — server-side email validation, IP bazlı rate limiting (3 istek/dk), duplicate handling |
| `GET /api/waitlist/count` | Gerçek kayıt sayısı — `SELECT COUNT(*)` sonucu, 60sn cache'li |
| `GET /api/admin/waitlist?token=...&page=1&limit=50` | Admin paneli — token korumalı, pagination destekli |
| `GET /make-server-947b0a07/health` | Health check (korundu) |

**Rate limiting**: IP başına dakikada 3 istek. Aşınca `429 Too Many Requests`.

### 2. Frontend Entegrasyonu

| Dosya | Değişiklik |
|---|---|
| `src/lib/supabase.ts` | Edge function URL eklendi (`EDGE_URL`) |
| `src/lib/counter.ts` | localStorage tabanlı sayaç → gerçek API (`GET /api/waitlist/count`), 5dk TTL cache |
| `src/app/components/CTA.tsx` | Direkt `supabase.from().insert()` → `POST /api/waitlist` edge function |
| `src/app/components/Hero.tsx` | Sahte localStorage counter → `useEffect` ile gerçek API sayacı |
| `src/app/components/Navbar.tsx` | `waitlistCounter.increment()` çağrıları kaldırıldı |

### 3. Admin Paneli

| Dosya | Açıklama |
|---|---|
| `src/app/pages/AdminPage.tsx` | `/admin` route'u, token ile giriş, waitlist tablosu, sayfalama |
| `src/app/routes.tsx` | `/admin` route'u eklendi |

### 4. Smooth Scroll İyileştirmesi

| Dosya | Değişiklik |
|---|---|
| `src/app/utils/smoothScroll.ts` | Özel smooth scroll fonksiyonu (900ms, easeInOutCubic easing) |
| `src/styles/theme.css` | CSS `scroll-behavior: smooth` kaldırıldı |
| `src/app/components/Root.tsx` | Tüm `#anchor` linkleri için global click handler |

---

## Kalan Eksiklikler — Deployment Adımları

Bu adımların **Supabase Dashboard** üzerinden manuel yapılması gerekiyor (CLI yetkisi olmadığı için).

### Adım 1: Waitlist Tablosunu Oluştur (Migration)

1. Supabase Dashboard'a git: https://supabase.com/dashboard/project/lnfgtcgnacmubnovzexi
2. Soldaki menüden **SQL Editor**'a tıkla
3. **New query** butonuna tıkla
4. Aşağıdaki SQL'i yapıştır ve **Run**'a tıkla:

```sql
CREATE TABLE IF NOT EXISTS waitlist (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  source TEXT DEFAULT 'website',
  created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous inserts" ON waitlist
  FOR INSERT
  TO anon
  WITH CHECK (true);
```

5. **Run** butonuna tıkladıktan sonra "Success" mesajını görmelisin.

### Adım 2: Edge Function'ı Deploy Et

1. Dashboard'da **Edge Functions** menüsüne git
2. **Create a new function** veya mevcut `server` fonksiyonunu bul
3. `supabase/functions/server/index.ts` dosyasının içeriğini kopyala
4. Fonksiyona yapıştır ve **Deploy** et

### Adım 3: ADMIN_TOKEN Environment Variable Ayarla

1. Dashboard'da **Edge Functions** → `server` fonksiyonuna tıkla
2. **Settings** veya **Environment Variables** sekmesini bul
3. Yeni bir env var ekle:
   - **Key**: `ADMIN_TOKEN`
   - **Value**: Seçtiğin güçlü bir şifre (örn: `nw-admin-2024-secret`)
4. **Save** ve **Redeploy** et

### Adım 4: Frontend'i Deploy Et

1. Lokalde `pnpm build` çalıştır (zaten çalıştı, `dist/` hazır)
2. `dist/` klasörünü hosting'e yükle:

**Cloudflare Pages** (önerilen):
```bash
npx wrangler pages deploy dist
```

**Netlify**:
```bash
npx netlify-cli deploy --prod --dir=dist
```

**Vercel**:
```bash
npx vercel deploy --prod dist
```

**veya manuel**: `dist/` içindeki her şeyi mevcut hosting'ine FTP/RSYNC ile yükle.

### Adım 5: Admin Panelini Test Et

- `https://nativeway.app/admin` adresine git
- Adım 3'te belirlediğin `ADMIN_TOKEN`'i gir
- Waitlist kayıtlarının listelendiğini doğrula

---

## Doğrulama Kontrol Listesi

- [ ] SQL Editor'dan migration çalıştı
- [ ] Edge function deploy edildi
- [ ] `ADMIN_TOKEN` env var'ı ayarlandı
- [ ] CTA formuna email gönderip `201` cevabı alındı
- [ ] Aynı email tekrar gönderilince `409` (already signed up) alındı
- [ ] Peş peşe 4 istek → `429` (rate limit) alındı
- [ ] Hero'daki sayaç gerçek sayıyı gösteriyor
- [ ] `/admin` sayfası token ile çalışıyor
- [ ] `pnpm build` başarılı

---

## Teknik Notlar

- **Rate limiting in-memory çalışır**, edge function cold start olduğunda sıfırlanır. Production scale'de bu kabul edilebilir.
- **Waitlist count 60sn cache'lenir**, `GET /api/waitlist/count` sık çağrıldığında DB'yi yormaz.
- **Admin token sessionStorage'da saklanır**, sayfa kapanınca silinir. Tarayıcıda kalıcı olarak tutulmaz.
- **Edge function CORS** şu an `localhost:5173` ve `nativeway.app` için açık. Yeni domain eklenirse `index.ts` içinde (veya `ALLOWED_ORIGINS` env ile) güncellenmeli.
