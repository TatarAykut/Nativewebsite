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
      badge: "Be a traveler, not a tourist",
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
      heading: "Born from a real passion, built with real purpose",
      p1: "We're three friends who know how travel transforms you — the feeling of getting lost in a foreign city's streets, the magic of stumbling upon something unforgettable. NativeWay wasn't born from a marketing strategy or a made-up 'aha moment.' It started with an honest conversation around the table: 'What kind of travel assistant would we build for ourselves?'",
      p2: "We realized a perfect trip isn't black or white. Skipping the Colosseum in Rome makes no sense — but neither does eating at a soulless tourist-trap restaurant every night. We wanted the best of both worlds: the grandeur of iconic landmarks, and right after, the warmth of a neighborhood café that captures the city's true spirit. That balance is what we chase.",
      founderNote: "Real founders. Real values. No made-up stories.",
      cardTitle: "",
      cardSub: "",
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
      badge: "做个旅行者，而非游客",
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
      heading: "源于真实的热情，为真实的目的而建",
      p1: "我们是三个深知旅行如何改变人的朋友——在异国街头迷路的感觉，偶然发现难忘瞬间的魔力。NativeWay 并非源于营销策略或编造的'灵感时刻'，而是始于一次坦诚的对话：'我们想为自己打造什么样的旅行助手？'",
      p2: "我们意识到，完美的旅程并非非黑即白。去了罗马却跳过斗兽场毫无意义——但每晚都在毫无灵魂的游客餐厅吃饭同样令人疲惫。我们追求的是两全其美：既能感受标志性建筑的宏伟，又能随即沉浸在城市真正灵魂所在的街区咖啡馆。",
      founderNote: "真实的创始人。真实的价值观。没有编造的故事。",
      cardTitle: "",
      cardSub: "",
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
      badge: "Gezgin ol, turist değil",
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
      heading: "Gerçek bir tutkudan doğan, gerçek bir proje",
      p1: "Seyahatin insanı nasıl dönüştürdüğünü, yabancı bir şehrin sokaklarında kaybolmanın ne kadar özel bir his olduğunu çok iyi bilen üç arkadaşız. NativeWay'i yaratma fikri, süslü bir pazarlama stratejisinden veya uydurma bir 'ilham anından' değil; masaya oturup 'Biz kendimiz için nasıl bir seyahat asistanı isterdik?' diye sorduğumuz o dürüst andan doğdu.",
      p2: "Fark ettik ki, kusursuz bir yolculuk siyah ve beyazlardan ibaret değil. Roma'ya gidip Kolezyum'u görmemek ne kadar anlamsızsa, akşam yemeğini sadece turistlere hitap eden ruhsuz bir restoranda yemek de o kadar yorucu. Biz, her iki dünyanın da en iyi yanlarını birleştirmek istedik. Hem o ikonik, devasa simgelerin ihtişamını yaşamanızı sağlayan hem de hemen sonrasında sizi o şehrin gerçek ruhunu yansıtan yerel bir mahalle kahvecisiyle buluşturan o kusursuz dengeyi kurmak istedik.",
      founderNote: "Gerçek kurucular. Gerçek değerler. Uydurma hikayeler yok.",
      cardTitle: "",
      cardSub: "",
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
      badge: "Vær en reisende, ikke en turist",
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
      heading: "Født av ekte lidenskap, bygget med ekte formål",
      p1: "Vi er tre venner som vet hvordan reiser forandrer deg — følelsen av å gå seg vill i en fremmed bys gater, magien ved å snuble over noe uforglemmelig. NativeWay ble ikke født fra en markedsstrategi eller et oppdiktet 'aha-øyeblikk.' Det startet med en ærlig samtale rundt bordet: 'Hva slags reiseassistent ville vi bygget for oss selv?'",
      p2: "Vi innså at en perfekt reise ikke er svart-hvitt. Å dra til Roma uten å se Colosseum gir ingen mening — men det samme gjelder å spise på en sjelløs turistrestaurant hver kveld. Vi ønsket det beste fra begge verdener: storheten til ikoniske landemerker, og rett etterpå, varmen fra en nabolagskafé som fanger byens sanne ånd. Den balansen er det vi jakter på.",
      founderNote: "Ekte gründere. Ekte verdier. Ingen oppdiktede historier.",
      cardTitle: "",
      cardSub: "",
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
