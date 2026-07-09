# NativeWay — AI/LLM Crawler Optimizasyonu & Rendering Stratejisi

> Bu doküman NativeWay web sitesinin yapay zeka tarayıcıları (GPTBot, Claude, Perplexity, Google AI Overviews vb.) ve geleneksel arama motorları tarafından %100 anlaşılabilir olması için yapılan tüm teknik çalışmaları ve gelecek planlarını içerir.

---

## Problem: Client-Side Rendering (CSR) ve AI Crawler'lar

NativeWay React + Vite SPA olarak geliştirildi. CSR mimarisinde tarayıcı şu akışı izler:

```
Browser → GET / → <div id="root"></div> → JS indirilir → React render eder → içerik görünür
```

**Temel sorun**: Çoğu AI crawler'ı JavaScript çalıştırmaz. Onlar sadece statik HTML'i görür — yani boş bir `<div id="root"></div>`.

| Crawler | JS Çalıştırır? | CSR İçeriği Görür? |
|---|---|---|
| Googlebot | ✅ Evet | ✅ Gecikmeli olarak |
| GPTBot (OpenAI/ChatGPT) | ⚠️ Kısmi | ❌ Genelde görmez |
| CCBot (Common Crawl) | ❌ Hayır | ❌ Sadece statik HTML |
| Claude-Web (Anthropic) | ⚠️ Kısmi | ❌ Güvenilmez |
| PerplexityBot | ❌ Hayır | ❌ Sadece statik HTML |
| Google-Extended (Gemini) | ❌ Hayır | ❌ Sadece statik HTML |
| Applebot | ❌ Hayır | ❌ Sadece statik HTML |

---

## Yapılan Tüm Değişiklikler (Tamamlandı ✅)

### 1. Kapsamlı JSON-LD Yapısal Veri (`src/app/components/StructuredData.tsx`)

Birbiriyle `@id` referanslarıyla bağlanan 3 ana şema oluşturuldu:

- **`Organization`** — NativeWay şirket bilgileri, 3 kurucu (`Person` entity'leri ile: Ahmet Semih Dikilitaş, Said Aydın, Aykut Arayıcı), iletişim, sosyal medya, faaliyet alanları
- **`SoftwareApplication`** (MobileApplication) — iOS/Android, 277+ şehir, 8 özellik, rating ⭐4.8, ücretsiz
- **`WebSite`** — SearchAction, 4 dil desteği (en/zh/tr/no), telif hakkı
- **`BreadcrumbList`** — Her sayfa için otomatik breadcrumb (root hariç)
- **Statik fallback** — `index.html` içinde aynı JSON-LD gömülü (JS çalıştırmayan crawler'lar için)

### 2. AI Crawler Optimize `robots.txt` (`public/robots.txt`)

15+ crawler için özel kurallar:
- **AI/LLM**: GPTBot, Claude-Web, anthropic-ai, Google-Extended, CCBot, PerplexityBot, Applebot, Applebot-Extended, cohere-ai, MistralAI, meta-externalagent, FacebookBot
- **Arama motorları**: Googlebot, Bingbot, DuckDuckBot, YandexBot, Baiduspider
- Her crawler için optimize `Crawl-delay` değerleri
- Hepsi için `Allow: /` (tüm sayfalar açık)

### 3. Gelişmiş `sitemap.xml` (`public/sitemap.xml`)

- 8 sayfanın tamamı `lastmod`, `changefreq`, `priority` ile
- Her URL için `xhtml:link` ile 5 hreflang alternatifi (x-default + en/zh/tr/no)

### 4. LLM Keşif Dosyaları

- **`public/llms.txt`** — LLM crawler'ları için yapılandırılmış markdown (ürün özeti, özellikler, sayfa listesi, teknik notlar, crawler izinleri)
- **`public/llms-full.txt`** — Detaylı içerik (organizasyon, kurucular, değerler, hedef kitle, rekabet avantajı, nasıl çalışır, teknoloji stack'i)

### 5. Kapsamlı Meta Etiketleri (`index.html` + `src/app/components/SEO.tsx`)

**Statik `index.html`** (JS çalıştırmayan crawler'lar için):
- `title`, `description`, `keywords`, `author`
- `robots` + `googlebot` (max-image-preview, max-snippet)
- Open Graph: `og:title`, `og:description`, `og:url`, `og:type`, `og:site_name`, `og:locale`, `og:image` (+ width/height/alt)
- Twitter Card: `twitter:card`, `twitter:site`, `twitter:title`, `twitter:description`, `twitter:image`
- `hreflang` alternatifleri (5 dil)
- AI crawler sinyalleri: `GPTBot`, `CCBot`, `anthropic-ai`, `Google-Extended`, `PerplexityBot`
- PWA: `application-name`, `theme-color` (dark/light), `apple-mobile-web-app-title`
- **Statik JSON-LD** (Organization + SoftwareApplication + WebSite + SearchAction)

**Dinamik `SEO.tsx`** (her sayfa için react-helmet-async ile):
- Yukarıdaki tüm meta etiketleri, sayfa başına özelleştirilmiş
- `keywords` desteği
- `noIndex` desteği (yasal sayfalar için)
- `og:locale` + 3 alternatif dil
- `og:type` override (website/article/product)
- `article:published_time` / `article:modified_time`
- `StructuredData` bileşeni ile JSON-LD enjeksiyonu (Helmet dışında, nesting hatası önlendi)

### 6. Semantik HTML İyileştirmeleri

- **`Root.tsx`**: `role="document"`, `aria-label="Main content"` eklendi
- **`LegalSection.tsx`**: `<div>` → `<section>` + `aria-labelledby` + `id` bağlantısı
- **Privacy/Terms/Cookie sayfaları**: `<article>` + `aria-labelledby`, `ogType="article"`, yayın tarihleri
- Mevcut yapı zaten iyiydi: `<header>`, `<nav>`, `<main>`, `<footer>`, `<section>`, `<h1>`-`<h3>` hiyerarşisi

### 7. Prerender Çözümü (`scripts/prerender.mjs`) ⭐ Kritik

**Kurulan**: `puppeteer-core` (sistemdeki Chrome'u kullanır, ek indirme yok)

**Nasıl çalışır**:
1. `pnpm build` → Vite production build'i oluşturur
2. `postbuild` → `node scripts/prerender.mjs` otomatik çalışır
3. Script headless Chrome başlatır, her route'u ziyaret eder
4. React'in tam render etmesini bekler (network idle + 1.5s settle)
5. Her sayfanın TAM HTML'ini `dist/` altına kaydeder

**Sonuç** (her sayfa için `dist/` çıktısı):

| Sayfa | Root içerik boyutu |
|---|---|
| `/` (Home) | 37 KB |
| `/about` | 25 KB |
| `/features` | 67 KB |
| `/how-it-works` | 42 KB |
| `/values` | 29 KB |
| `/privacy` | 20 KB |
| `/terms` | 17 KB |
| `/cookies` | 15 KB |

Her sayfa için ayrı klasörde `index.html` oluşturulur:
```
dist/
  index.html           ← Ana sayfa (prerender edilmiş)
  about/index.html     ← Hakkımızda (prerender edilmiş)
  features/index.html  ← Özellikler (prerender edilmiş)
  ...
```

---

## AI Crawler'lar Şu An Neyi Görüyor?

| Veri | Nereden geliyor? | GPTBot | Claude | Gemini | CCBot |
|---|---|---|---|---|---|
| Site adı, açıklama | Statik meta + JSON-LD | ✅ | ✅ | ✅ | ✅ |
| Kurucular (3 kişi) | JSON-LD Organization | ✅ | ✅ | ✅ | ✅ |
| Uygulama bilgileri | JSON-LD SoftwareApp | ✅ | ✅ | ✅ | ✅ |
| 277+ şehir, iOS/Android | JSON-LD + meta | ✅ | ✅ | ✅ | ✅ |
| 8 özellik listesi | JSON-LD featureList | ✅ | ✅ | ✅ | ✅ |
| Site sayfaları | sitemap.xml | ✅ | ✅ | ✅ | ✅ |
| Ana sayfa içeriği | Prerender HTML | ✅ | ✅ | ✅ | ✅ |
| About sayfası içeriği | Prerender HTML | ✅ | ✅ | ✅ | ✅ |
| Features sayfası içeriği | Prerender HTML | ✅ | ✅ | ✅ | ✅ |
| How It Works içeriği | Prerender HTML | ✅ | ✅ | ✅ | ✅ |
| Values sayfası içeriği | Prerender HTML | ✅ | ✅ | ✅ | ✅ |
| Privacy/Terms/Cookies | Prerender HTML | ✅ | ✅ | ✅ | ✅ |
| Site yapısı özeti | llms.txt | ✅ | ✅ | ✅ | ✅ |
| Detaylı site içeriği | llms-full.txt | ✅ | ✅ | ✅ | ✅ |

---

## Deploy Edilmesi Gerekenler

Tüm çıktı `dist/` klasöründedir. Deploy için `dist/` içindeki her şey sunucuya yüklenmelidir:

```
dist/
  index.html
  about/index.html
  features/index.html
  how-it-works/index.html
  values/index.html
  privacy/index.html
  terms/index.html
  cookies/index.html
  assets/*.js
  assets/*.css
  assets/*.png
  robots.txt
  sitemap.xml
  llms.txt
  llms-full.txt
```

---

## Gelecek Planları

### Phase 2: Astro ile Full SSG (Opsiyonel)

Mevcut prerender çözümü çalışıyor olsa da, production'da ideal olan **build-time SSG**'dir. Astro migrasyonu ile:
- Her sayfa build anında statik HTML olarak üretilir (headless browser gerekmez)
- React bileşenleri aynen korunur (Islands Architecture)
- İnteraktif bileşenler (CTA form, Navbar) client'ta hydrate edilir
- Build süresi kısalır, çıktı daha temiz olur

Bu bir sonraki aşamadır. Mevcut çözüm AI crawler'lar için yeterlidir.

### Phase 3: Content API (Opsiyonel)

LLM crawler'larının site içeriğini programatik olarak çekebilmesi için:
```
GET /api/llms/content.json → Tüm site içeriği JSON formatında
GET /api/llms/pages.json    → Sayfa listesi ve metadata
```
