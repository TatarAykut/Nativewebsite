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
      home: "Home",
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
          title: "Elevate the Local",
          description: "Great trips blend the best of both worlds. Alongside world-class hospitality, we make sure independent businesses, family-run spots, and cultural institutions get the visibility they deserve.",
        },
        {
          title: "Privacy by Design",
          description: "Your data is yours. No location selling, no ad tracking, no behavioral profiling. We make money when you use the app, period.",
        },
      ],
    },
    features: {
      badge: "Features",
      heading: "One app for the whole trip",
      sub: "AI planning, local discovery, group coordination, destination guides, passport stamps, and community — all in one place.",
      items: [
        { title: "AI Trip Planner", description: "Personalized itineraries based on destination, budget, group size, and interests. Multi-city trips automatically ordered in the most logical route." },
        { title: "Local Discovery", description: "Authentic cafes, restaurants, museums, parks, and hidden gems from real locals — not tourist traps. Premium unlocks an AI local guide." },
        { title: "Party Mode", description: "Plan trips in a shared travel lobby. Host manages the trip, or everyone adds preferences for an itinerary that works for the whole group." },
        { title: "Tourist Guide", description: "Country and city guides covering sights, food, transport, ticket prices, visa rules, and official safety alerts for your nationality." },
        { title: "NativeWay Passport", description: "Collect digital stamps from every country you visit. Progress from Orange to Navy Blue to Gold through travel milestones." },
        { title: "Community & Messaging", description: "Share travel blogs, collect badges, and chat via direct messages, group chats, and trip-based conversations — all inside the app." },
      ],
    },
    howItWorks: {
      badge: "How It Works",
      heading: "Three steps to a smarter trip",
      steps: [
        {
          title: "Plan with AI",
          description: "Enter your destination, dates, group size, budget, and interests. The AI Trip Planner builds a complete personalized itinerary — including the optimal route for multi-city trips.",
        },
        {
          title: "Discover and explore",
          description: "Browse authentic local picks, read full destination guides, and find hidden gems. Check transport, visa rules, and ticket prices — all in one place.",
        },
        {
          title: "Travel together, collect memories",
          description: "Invite friends into Party Mode for shared planning. Navigate with offline access, collect passport stamps, and share your trip with the community when you're back.",
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
      home: "首页",
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
          title: "提升本地",
          description: "美好的旅行融合了两全其美。在顶级服务之外，我们确保独立商家、家族店铺和文化机构获得应有的关注。",
        },
        {
          title: "隐私设计",
          description: "您的数据属于您。不出售位置信息，不追踪广告，不进行行为分析。我们仅在您使用应用时获利。",
        },
      ],
    },
    features: {
      badge: "功能介绍",
      heading: "一款应用，覆盖整个旅程",
      sub: "AI 规划、本地探索、团队协作、目的地指南、护照印章与社区——尽在一处。",
      items: [
        { title: "AI 行程规划", description: "根据目的地、预算、团队规模和兴趣生成个性化行程。多城市旅行自动按最优路线排序。" },
        { title: "本地探索", description: "来自真实当地居民的正宗餐厅、咖啡馆、博物馆、公园和隐藏宝藏推荐——拒绝旅游陷阱。高级版解锁 AI 本地向导。" },
        { title: "组队模式", description: "在共享旅行大厅共同规划。主持人管理行程，或每位旅行者添加偏好，生成适合所有人的行程。" },
        { title: "旅游指南", description: "涵盖景点、餐饮、交通、票价、签证规定及针对您国籍的官方安全提醒的国家和城市指南。" },
        { title: "NativeWay 护照", description: "收集每个到访国家的数字印章。通过旅行里程碑从橙色护照升级到深蓝色，再解锁金色护照。" },
        { title: "社区与消息", description: "分享旅行博客、收集徽章，通过私信、群聊和行程聊天交流——全程无需离开应用。" },
      ],
    },
    howItWorks: {
      badge: "使用方式",
      heading: "三步，开启更智慧的旅行",
      steps: [
        {
          title: "AI 智能规划",
          description: "输入目的地、日期、团队规模、预算和兴趣爱好。AI 行程规划器生成完整的个性化行程——包括多城市旅行的最优路线。",
        },
        {
          title: "发现与探索",
          description: "浏览正宗本地推荐，阅读完整目的地指南，发现隐藏宝藏。查看交通信息、签证规定和票价——一应俱全。",
        },
        {
          title: "结伴同行，留下回忆",
          description: "邀请朋友进入组队模式共同规划。离线导航，收集护照印章，回来后与社区分享您的旅行故事。",
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
      home: "Ana Sayfa",
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
          title: "Yereli Yükselt",
          description: "Harika seyahatler her iki dünyanın da en iyisini birleştirir. Birinci sınıf konaklamanın yanında, bağımsız işletmelerin, aile işletmelerinin ve kültürel kurumların hak ettikleri görünürlüğü kazanmasını sağlıyoruz.",
        },
        {
          title: "Tasarımda Gizlilik",
          description: "Verileriniz size aittir. Konum satışı yok, reklam takibi yok, davranışsal profilleme yok. Yalnızca uygulamayı kullandığınızda para kazanıyoruz.",
        },
      ],
    },
    features: {
      badge: "Özellikler",
      heading: "Tüm gezi için tek uygulama",
      sub: "AI planlama, yerel keşif, grup koordinasyonu, destinasyon rehberleri, pasaport damgaları ve topluluk — hepsi bir arada.",
      items: [
        { title: "AI Gezi Planlayıcısı", description: "Destinasyon, bütçe, grup boyutu ve ilgi alanlarına göre kişiselleştirilmiş rotalar. Çok şehirli geziler otomatik olarak en mantıklı sırayla düzenlenir." },
        { title: "Yerel Keşif", description: "Gerçek yerel sakinlerden otantik kafe, restoran, müze, park ve gizli hazine önerileri — turist tuzakları değil. Premium, AI yerel rehberini açar." },
        { title: "Parti Modu", description: "Ortak bir seyahat lobisinde gezi planlayın. Host geziyi yönetir ya da herkes tercihlerini ekleyerek grubun tamamına uyan bir rota oluşturulur." },
        { title: "Turist Rehberi", description: "Görülecek yerler, yemek, ulaşım, bilet fiyatları, vize kuralları ve milliyetinize özel resmi güvenlik uyarılarını içeren ülke ve şehir rehberleri." },
        { title: "NativeWay Pasaportu", description: "Ziyaret ettiğiniz her ülkeden dijital damga toplayın. Seyahat kilometre taşlarıyla Turuncu'dan Lacivert'e, ardından Altın Pasaport'a ilerleyin." },
        { title: "Topluluk ve Mesajlaşma", description: "Seyahat blogları paylaşın, rozetler toplayın ve doğrudan mesajlar, grup sohbetleri ve gezi bazlı konuşmalar aracılığıyla iletişim kurun — hepsi uygulamadan çıkmadan." },
      ],
    },
    howItWorks: {
      badge: "Nasıl Çalışır",
      heading: "Daha akıllı bir gezi için üç adım",
      steps: [
        {
          title: "AI ile planla",
          description: "Destinasyonunuzu, tarihlerinizi, grup büyüklüğünüzü, bütçenizi ve ilgi alanlarınızı girin. AI Gezi Planlayıcısı eksiksiz, kişiselleştirilmiş bir rota oluşturur — çok şehirli geziler için optimum güzergah dahil.",
        },
        {
          title: "Keşfet ve gez",
          description: "Otantik yerel önerilere göz atın, tam destinasyon rehberlerini okuyun ve gizli hazineleri bulun. Ulaşım, vize kuralları ve bilet fiyatlarını tek yerden kontrol edin.",
        },
        {
          title: "Birlikte seyahat et, anılar biriktir",
          description: "Ortak planlama için arkadaşlarınızı Parti Modu'na davet edin. Çevrimdışı gezinin, pasaport damgaları toplayın ve döndüğünüzde gezinizi toplulukla paylaşın.",
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
      home: "Hjem",
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
          title: "Løft det lokale",
          description: "Gode reiser kombinerer det beste fra begge verdener. Ved siden av førsteklasses gjestfrihet sørger vi for at uavhengige bedrifter, familiedrevne steder og kulturinstitusjoner får synligheten de fortjener.",
        },
        {
          title: "Personvern by design",
          description: "Dataene dine er dine. Ingen salg av lokasjon, ingen annonsesporing, ingen atferdsprofilering. Vi tjener penger når du bruker appen, punktum.",
        },
      ],
    },
    features: {
      badge: "Funksjoner",
      heading: "Én app for hele turen",
      sub: "AI-planlegging, lokal oppdagelse, gruppekoordinering, destinasjonsguider, passorstempel og fellesskap — alt på ett sted.",
      items: [
        { title: "AI-reiseplanlegger", description: "Personlige reiseplaner basert på destinasjon, budsjett, gruppestørrelse og interesser. Flerbyreiser sorteres automatisk i den mest logiske rekkefølgen." },
        { title: "Lokal oppdagelse", description: "Autentiske kaféer, restauranter, museer, parker og skjulte perler fra ekte lokale — ikke turistfeller. Premium gir tilgang til en AI lokal guide." },
        { title: "Party-modus", description: "Planlegg turer i en delt reiselobby. En vert styrer turen, eller alle legger til preferanser for en reiseplan som fungerer for hele gruppen." },
        { title: "Turistguide", description: "Landes- og byguider med severdigheter, mat, transport, billettpriser, visumregler og offisielle sikkerhetsvarsler tilpasset ditt statsborgerskap." },
        { title: "NativeWay Pass", description: "Samle digitale stempler fra hvert land du besøker. Gå fra Oransje til Marineblå til Gull-pass gjennom reisemilepæler." },
        { title: "Fellesskap og meldinger", description: "Del reiseblogger, samle merker og chat via direktemeldinger, gruppesamtaler og turbaserte chatter — alt inni appen." },
      ],
    },
    howItWorks: {
      badge: "Slik fungerer det",
      heading: "Tre steg til en smartere tur",
      steps: [
        {
          title: "Planlegg med AI",
          description: "Skriv inn destinasjon, datoer, gruppestørrelse, budsjett og interesser. AI-reiseplanleggeren lager en komplett, personlig reiseplan — inkludert optimal rute for flerbyreiser.",
        },
        {
          title: "Oppdag og utforsk",
          description: "Bla gjennom autentiske lokale tips, les komplette destinasjonsguider og finn skjulte perler. Sjekk transport, visumregler og billettpriser — alt på ett sted.",
        },
        {
          title: "Reis sammen, samle minner",
          description: "Inviter venner til Party-modus for felles planlegging. Naviger offline, samle passorstempel og del turen din med fellesskapet når du er tilbake.",
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
