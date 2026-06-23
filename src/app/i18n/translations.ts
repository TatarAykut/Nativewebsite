export type Language = "en" | "zh" | "tr" | "no";

export const LANGUAGES: { code: Language; label: string; flag: string; nativeName: string }[] = [
  { code: "en", label: "English", flag: "🇬🇧", nativeName: "English" },
  { code: "zh", label: "Chinese", flag: "🇨🇳", nativeName: "中文" },
  { code: "tr", label: "Turkish", flag: "🇹🇷", nativeName: "Türkçe" },
  { code: "no", label: "Norwegian", flag: "🇳🇴", nativeName: "Norsk" },
];

export const translations = {
  en: {
    nav: {
      about: "About",
      features: "Features",
      howItWorks: "How It Works",
      values: "Values",
      cta: "Get Early Access",
    },
    hero: {
      badge: "Discover the world natively",
      headline1: "Travel Easier.",
      headline2: "Experience",
      headline3: "More.",
      sub: "NativeWay connects you with authentic local experiences, hidden gems, and real recommendations from people who call the destination home. No tourist traps. Just real travel.",
      ctaPrimary: "Get Early Access",
      ctaSecondary: "Learn More",
      stat1Label: "Cities planned",
      stat2Label: "Waitlist members",
      stat3Label: "Local-first",
      scroll: "Scroll",
    },
    about: {
      badge: "Our Story",
      heading: "Born from a bad travel experience",
      p1: "We were tired of overpaying for mediocre tourist restaurants while the real gems were just around the corner. Tired of algorithmic travel guides that feel the same in every city. Tired of missing the soul of a place.",
      p2: "NativeWay was built with one belief: the best travel guide is always a local. We connect travelers with authentic insider knowledge — the neighborhood coffee shop that's been there for 40 years, the shortcut to the viewpoint, the market only open on Sundays.",
      founderNote: "Founded by travelers, for travelers",
      cardTitle: "Yamamoto Coffee, Kyoto",
      cardSub: "Open since 1962 · Recommended by 47 locals",
    },
    values: {
      badge: "What We Stand For",
      heading: "Built on values that actually matter",
      items: [
        {
          title: "Authenticity First",
          description: "Every recommendation on NativeWay comes from real locals — residents, not influencers. If it doesn't feel genuine, it doesn't make the cut.",
        },
        {
          title: "Community-Driven",
          description: "Locals earn recognition for sharing their city. Travelers give back by rating honestly. The whole ecosystem runs on mutual trust.",
        },
        {
          title: "Support Local",
          description: "We deliberately steer tourism toward independent businesses, family-run spots, and cultural institutions that need it most.",
        },
        {
          title: "Privacy by Design",
          description: "Your data is yours. No location selling, no ad tracking, no behavioral profiling. We make money when you use the app, period.",
        },
      ],
    },
    features: {
      badge: "Features",
      heading: "Everything you need to travel like a local",
      sub: "NativeWay replaces a stack of apps, guidebooks, and Facebook groups with one place that actually knows the destination.",
      items: [
        { title: "Local Pin Maps", description: "Browse curated maps where every pin was dropped by a resident, not an algorithm." },
        { title: "Insider Reviews", description: "Real opinions from people who eat, sleep, and live in the neighborhood every day." },
        { title: "Ask a Local", description: "Chat directly with verified locals to get answers no guidebook has." },
        { title: "Native Routes", description: "Follow day-by-day itineraries crafted by residents who know every shortcut." },
        { title: "Hidden Gems", description: "Spots so good locals almost don't want to share them. Almost." },
        { title: "Offline Ready", description: "Download any city and navigate without data roaming. No signal, no problem." },
      ],
    },
    howItWorks: {
      badge: "How It Works",
      heading: "Three steps to a better trip",
      steps: [
        {
          title: "Pick your destination",
          description: "Search any of our supported cities. We'll show you what locals actually love — not just what's trending on social media.",
        },
        {
          title: "Explore native recommendations",
          description: "Browse maps, read insider reviews, and save places to your personal trip board. Filter by vibe, budget, or time of day.",
        },
        {
          title: "Go and experience it",
          description: "Head out with offline maps and local tips in your pocket. Chat with the community if you get lost or want a live recommendation.",
        },
      ],
    },
    cta: {
      badge: "Coming Soon",
      heading1: "Be the first to",
      heading2: "travel natively",
      sub: "Join thousands of travelers on our waitlist. Early access members get free premium for the first year.",
      placeholder: "your@email.com",
      button: "Join the waitlist",
      success: "You're on the list! We'll be in touch soon.",
      disclaimer: "No spam. No commitments. Unsubscribe anytime.",
    },
    footer: {
      tagline: "Connecting travelers with authentic local experiences worldwide. Travel Easier. Experience More.",
      productHeading: "Product",
      companyHeading: "Company",
      productLinks: ["Features", "How It Works", "Pricing", "Changelog"],
      companyLinks: ["About", "Blog", "Careers", "Press", "Contact"],
      copyright: "© 2026 NativeWay. All rights reserved.",
      legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
    },
  },

  zh: {
    nav: {
      about: "关于我们",
      features: "功能介绍",
      howItWorks: "使用方式",
      values: "我们的价值观",
      cta: "提前获取",
    },
    hero: {
      badge: "以当地人的方式探索世界",
      headline1: "旅行更轻松。",
      headline2: "体验",
      headline3: "更丰富。",
      sub: "NativeWay 将您与真实的本地体验、隐藏的宝藏以及当地居民的真诚推荐相连接。没有旅游陷阱，只有真实的旅行。",
      ctaPrimary: "提前获取",
      ctaSecondary: "了解更多",
      stat1Label: "计划城市",
      stat2Label: "候补名单成员",
      stat3Label: "本地优先",
      scroll: "滚动",
    },
    about: {
      badge: "我们的故事",
      heading: "源于一次糟糕的旅行经历",
      p1: "我们厌倦了为平庸的旅游餐厅花冤枉钱，而真正的好地方就在转角处。厌倦了在每个城市都感觉千篇一律的算法旅游指南。厌倦了错过一个地方的灵魂。",
      p2: "NativeWay 基于一个信念而诞生：最好的旅行指南永远是当地人。我们将旅行者与真实的内部知识相连接——那家已经存在40年的街区咖啡馆，通往景观台的捷径，只在周日开放的市场。",
      founderNote: "由旅行者创立，为旅行者服务",
      cardTitle: "山本咖啡，京都",
      cardSub: "1962年开业 · 47位当地人推荐",
    },
    values: {
      badge: "我们的立场",
      heading: "建立在真正重要的价值观之上",
      items: [
        {
          title: "真实性优先",
          description: "NativeWay 上的每一条推荐都来自真实的当地人——居民，而非网红。如果感觉不真实，就不会通过审核。",
        },
        {
          title: "社区驱动",
          description: "当地人通过分享自己的城市获得认可。旅行者通过诚实评价回馈社区。整个生态系统建立在相互信任之上。",
        },
        {
          title: "支持本地",
          description: "我们有意将旅游业引向独立商家、家族经营的场所以及最需要支持的文化机构。",
        },
        {
          title: "隐私设计",
          description: "您的数据属于您。不出售位置信息，不追踪广告，不进行行为分析。我们仅在您使用应用时获利。",
        },
      ],
    },
    features: {
      badge: "功能介绍",
      heading: "像当地人一样旅行所需的一切",
      sub: "NativeWay 用一个真正了解目的地的平台替代了多个应用、旅行指南和Facebook群组。",
      items: [
        { title: "本地标注地图", description: "浏览精选地图，每个标注都由居民而非算法添加。" },
        { title: "内部评价", description: "来自每天在街区吃饭、生活的真实居民的真实意见。" },
        { title: "问问当地人", description: "直接与经过验证的当地人聊天，获取任何旅行指南都没有的答案。" },
        { title: "本地路线", description: "跟随由了解每条捷径的居民精心制作的逐日行程。" },
        { title: "隐藏宝藏", description: "好到当地人几乎不想分享的地方。几乎。" },
        { title: "离线使用", description: "下载任意城市，无需数据漫游即可导航。没有信号？没问题。" },
      ],
    },
    howItWorks: {
      badge: "使用方式",
      heading: "三步，开启更好的旅行",
      steps: [
        {
          title: "选择您的目的地",
          description: "搜索我们支持的任何城市。我们将向您展示当地人真正喜爱的地方——不只是社交媒体上的热门打卡点。",
        },
        {
          title: "探索本地推荐",
          description: "浏览地图，阅读内部评价，将地点保存到您的个人行程板。按氛围、预算或时间段筛选。",
        },
        {
          title: "出发，亲身体验",
          description: "带着离线地图和本地贴士出发。如果迷路或想要实时推荐，可以与社区聊天。",
        },
      ],
    },
    cta: {
      badge: "即将推出",
      heading1: "成为第一批",
      heading2: "以本地方式旅行",
      sub: "加入数千名旅行者的候补名单。早期访问成员第一年可免费使用高级功能。",
      placeholder: "您的邮箱地址",
      button: "加入候补名单",
      success: "您已成功加入名单！我们将尽快与您联系。",
      disclaimer: "无垃圾邮件，无承诺，随时可取消订阅。",
    },
    footer: {
      tagline: "连接旅行者与世界各地真实的本地体验。旅行更轻松，体验更丰富。",
      productHeading: "产品",
      companyHeading: "公司",
      productLinks: ["功能介绍", "使用方式", "定价", "更新日志"],
      companyLinks: ["关于我们", "博客", "招聘", "媒体", "联系我们"],
      copyright: "© 2026 NativeWay. 保留所有权利。",
      legal: ["隐私政策", "服务条款", "Cookie 政策"],
    },
  },

  tr: {
    nav: {
      about: "Hakkımızda",
      features: "Özellikler",
      howItWorks: "Nasıl Çalışır",
      values: "Değerlerimiz",
      cta: "Erken Erişim",
    },
    hero: {
      badge: "Dünyayı yerel gözüyle keşfet",
      headline1: "Daha kolay seyahat.",
      headline2: "Daha fazla",
      headline3: "deneyim.",
      sub: "NativeWay sizi otantik yerel deneyimlerle, gizli güzelliklerle ve gerçek sakinlerin samimi önerileriyle buluşturur. Turist tuzağı yok. Sadece gerçek seyahat.",
      ctaPrimary: "Erken Erişim Alın",
      ctaSecondary: "Daha Fazla Bilgi",
      stat1Label: "Planlanan şehir",
      stat2Label: "Bekleme listesi üyesi",
      stat3Label: "Yerel öncelikli",
      scroll: "Kaydır",
    },
    about: {
      badge: "Hikayemiz",
      heading: "Kötü bir seyahat deneyiminden doğdu",
      p1: "Gerçek mücevherler köşe başındayken vasat turistik restoranlara fazla para ödeyip duruyorduk. Her şehirde aynı hissettiren algoritmik seyahat rehberlerinden bıkmıştık. Bir yerin ruhunu kaçırmaktan yorulduk.",
      p2: "NativeWay tek bir inançla kuruldu: en iyi seyahat rehberi her zaman bir yerlidir. Gezginleri otantik içeriden bilgiyle buluşturuyoruz — 40 yıldır orada olan mahalle kahvesi, manzara noktasına kestirme yol, yalnızca Pazar günleri açık olan pazar.",
      founderNote: "Gezginler tarafından, gezginler için kuruldu",
      cardTitle: "Yamamoto Kahve, Kyoto",
      cardSub: "1962'den beri açık · 47 yerli tarafından önerildi",
    },
    values: {
      badge: "Neyin Yanında Duruyoruz",
      heading: "Gerçekten önemli değerler üzerine inşa edildi",
      items: [
        {
          title: "Önce Özgünlük",
          description: "NativeWay'deki her öneri gerçek yerlilerden geliyor — sakinlerden, fenomenlerden değil. Gerçek hissettirmiyorsa geçemiyor.",
        },
        {
          title: "Topluluk Odaklı",
          description: "Yerliler şehirlerini paylaşarak tanınırlık kazanır. Gezginler dürüstçe değerlendirerek katkıda bulunur. Tüm ekosistem karşılıklı güven üzerine çalışır.",
        },
        {
          title: "Yereli Destekle",
          description: "Turizmi kasıtlı olarak bağımsız işletmelere, aile işletmelerine ve en çok ihtiyaç duyan kültürel kurumlara yönlendiriyoruz.",
        },
        {
          title: "Tasarımda Gizlilik",
          description: "Verileriniz size aittir. Konum satışı yok, reklam takibi yok, davranışsal profilleme yok. Yalnızca uygulamayı kullandığınızda para kazanıyoruz.",
        },
      ],
    },
    features: {
      badge: "Özellikler",
      heading: "Yerli gibi seyahat etmek için ihtiyacınız olan her şey",
      sub: "NativeWay, bir sürü uygulamanın, rehber kitabın ve Facebook grubunun yerini, gerçekten destinasyonu bilen tek bir platforma bırakıyor.",
      items: [
        { title: "Yerel Pin Haritaları", description: "Her pinin bir algoritma değil, bir sakin tarafından bırakıldığı özenle hazırlanmış haritaları inceleyin." },
        { title: "İçeriden Yorumlar", description: "Her gün mahallede yiyen, yaşayan kişilerin gerçek görüşleri." },
        { title: "Yerliye Sor", description: "Hiçbir rehber kitabının vermediği yanıtları almak için doğrudan doğrulanmış yerlilerle sohbet edin." },
        { title: "Yerel Rotalar", description: "Her kestirmeyi bilen sakinlerin hazırladığı günlük programları takip edin." },
        { title: "Gizli Hazineler", description: "Yerlilerin neredeyse paylaşmak istemediği kadar iyi yerler. Neredeyse." },
        { title: "Çevrimdışı Hazır", description: "Herhangi bir şehri indirin ve veri dolaşımı olmadan gezinin. Sinyal yok mu? Sorun değil." },
      ],
    },
    howItWorks: {
      badge: "Nasıl Çalışır",
      heading: "Daha iyi bir gezi için üç adım",
      steps: [
        {
          title: "Destinasyonunuzu seçin",
          description: "Desteklediğimiz şehirlerden birini arayın. Yalnızca sosyal medyada trend olanları değil, yerlilerin gerçekten sevdiği yerleri göstereceğiz.",
        },
        {
          title: "Yerel önerileri keşfedin",
          description: "Haritaları gezin, içeriden yorumları okuyun ve yerleri kişisel gezi panonuza kaydedin. Ambiyansa, bütçeye veya günün saatine göre filtreleyin.",
        },
        {
          title: "Gidin ve deneyimleyin",
          description: "Çevrimdışı haritalar ve yerel ipuçlarıyla yola çıkın. Kaybolursanız veya anlık öneri istersen toplulukla sohbet edin.",
        },
      ],
    },
    cta: {
      badge: "Yakında",
      heading1: "Yerli gibi",
      heading2: "seyahat etmenin ilki olun",
      sub: "Bekleme listemize katılan binlerce gezgine katılın. Erken erişim üyeleri ilk yıl ücretsiz premium alır.",
      placeholder: "e-posta@adresiniz.com",
      button: "Bekleme listesine katıl",
      success: "Listedesiniz! En kısa sürede sizinle iletişime geçeceğiz.",
      disclaimer: "Spam yok. Taahhüt yok. İstediğiniz zaman aboneliği iptal edin.",
    },
    footer: {
      tagline: "Gezginleri dünya genelinde otantik yerel deneyimlerle buluşturuyoruz. Daha kolay seyahat. Daha fazla deneyim.",
      productHeading: "Ürün",
      companyHeading: "Şirket",
      productLinks: ["Özellikler", "Nasıl Çalışır", "Fiyatlandırma", "Değişiklik Günlüğü"],
      companyLinks: ["Hakkımızda", "Blog", "Kariyer", "Basın", "İletişim"],
      copyright: "© 2026 NativeWay. Tüm hakları saklıdır.",
      legal: ["Gizlilik Politikası", "Hizmet Şartları", "Çerez Politikası"],
    },
  },

  no: {
    nav: {
      about: "Om oss",
      features: "Funksjoner",
      howItWorks: "Slik fungerer det",
      values: "Verdier",
      cta: "Tidlig tilgang",
    },
    hero: {
      badge: "Oppdag verden på den lokale måten",
      headline1: "Reis enklere.",
      headline2: "Opplev",
      headline3: "mer.",
      sub: "NativeWay kobler deg med autentiske lokale opplevelser, skjulte perler og ekte anbefalinger fra folk som kaller destinasjonen hjem. Ingen turistfeller. Bare ekte reise.",
      ctaPrimary: "Få tidlig tilgang",
      ctaSecondary: "Lær mer",
      stat1Label: "Planlagte byer",
      stat2Label: "På ventelisten",
      stat3Label: "Lokalt først",
      scroll: "Bla ned",
    },
    about: {
      badge: "Vår historie",
      heading: "Født av en dårlig reiseopplevelse",
      p1: "Vi var lei av å betale for mye for middelmådige turistrestauranter mens de virkelige perlene lå rett rundt hjørnet. Lei av algoritmiske reiseguider som føles like i alle byer. Lei av å gå glipp av sjelen i et sted.",
      p2: "NativeWay ble bygget på én tro: den beste reiseguiden er alltid en lokal. Vi kobler reisende med ekte innsideviten — nabolagets kaffebar som har vært der i 40 år, snarveien til utsiktsplassen, markedet som bare er åpent på søndager.",
      founderNote: "Grunnlagt av reisende, for reisende",
      cardTitle: "Yamamoto Kaffe, Kyoto",
      cardSub: "Åpnet i 1962 · Anbefalt av 47 lokale",
    },
    values: {
      badge: "Hva vi står for",
      heading: "Bygget på verdier som virkelig betyr noe",
      items: [
        {
          title: "Autentisitet først",
          description: "Alle anbefalinger på NativeWay kommer fra ekte lokale — beboere, ikke influencere. Hvis det ikke føles ekte, kommer det ikke med.",
        },
        {
          title: "Fellesskapsdrevet",
          description: "Lokale tjener anerkjennelse ved å dele sin by. Reisende gir tilbake ved å vurdere ærlig. Hele økosystemet drives av gjensidig tillit.",
        },
        {
          title: "Støtt lokalt",
          description: "Vi styrer bevisst turisme mot uavhengige virksomheter, familieeide steder og kulturinstitusjoner som trenger det mest.",
        },
        {
          title: "Personvern by design",
          description: "Dataene dine er dine. Ingen salg av lokasjon, ingen annonsesporing, ingen atferdsprofilering. Vi tjener penger når du bruker appen, punktum.",
        },
      ],
    },
    features: {
      badge: "Funksjoner",
      heading: "Alt du trenger for å reise som en lokal",
      sub: "NativeWay erstatter en haug med apper, reiseguider og Facebook-grupper med ett sted som faktisk kjenner destinasjonen.",
      items: [
        { title: "Lokale pinnkart", description: "Bla gjennom kuraterte kart der hver nål ble plassert av en beboer, ikke en algoritme." },
        { title: "Insidervurderinger", description: "Ekte meninger fra folk som spiser, sover og lever i nabolaget hver dag." },
        { title: "Spør en lokal", description: "Chat direkte med verifiserte lokale for å få svar ingen reiseguide har." },
        { title: "Native-ruter", description: "Følg dag-for-dag reiseruter laget av beboere som kjenner hver snarvei." },
        { title: "Skjulte perler", description: "Steder så gode at lokale nesten ikke vil dele dem. Nesten." },
        { title: "Offline-klar", description: "Last ned hvilken som helst by og naviger uten datautflyt. Inget signal? Inget problem." },
      ],
    },
    howItWorks: {
      badge: "Slik fungerer det",
      heading: "Tre steg til en bedre tur",
      steps: [
        {
          title: "Velg destinasjonen din",
          description: "Søk i en av våre støttede byer. Vi viser deg hva lokale faktisk elsker — ikke bare hva som er trending på sosiale medier.",
        },
        {
          title: "Utforsk lokale anbefalinger",
          description: "Bla gjennom kart, les insidervurderinger og lagre steder på ditt personlige reisebrett. Filtrer etter stemning, budsjett eller tidspunkt.",
        },
        {
          title: "Dra ut og opplev det",
          description: "Ta med deg offline-kart og lokale tips. Chat med fellesskapet hvis du går deg vill eller vil ha en live-anbefaling.",
        },
      ],
    },
    cta: {
      badge: "Kommer snart",
      heading1: "Vær den første til å",
      heading2: "reise på den lokale måten",
      sub: "Bli med tusenvis av reisende på ventelisten vår. Tidlig tilgang-medlemmer får gratis premium det første året.",
      placeholder: "din@epost.no",
      button: "Bli med på ventelisten",
      success: "Du er på listen! Vi tar kontakt snart.",
      disclaimer: "Ingen spam. Ingen forpliktelser. Avslutt abonnementet når som helst.",
    },
    footer: {
      tagline: "Kobler reisende med autentiske lokale opplevelser verden over. Reis enklere. Opplev mer.",
      productHeading: "Produkt",
      companyHeading: "Selskap",
      productLinks: ["Funksjoner", "Slik fungerer det", "Priser", "Endringslogg"],
      companyLinks: ["Om oss", "Blogg", "Karriere", "Presse", "Kontakt"],
      copyright: "© 2026 NativeWay. Alle rettigheter forbeholdt.",
      legal: ["Personvernerklæring", "Vilkår for bruk", "Informasjonskapselpolicy"],
    },
  },
} as const;

export type Translations = typeof translations.en;
