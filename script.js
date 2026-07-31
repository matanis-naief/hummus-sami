const languageConfig = {
  he: { dir: "rtl", label: "עברית" },
  en: { dir: "ltr", label: "EN" },
  ar: { dir: "rtl", label: "العربية" },
  ru: { dir: "ltr", label: "RU" }
};

const content = {
  he: {
    loader: { message: "טוענים לכם משהו טעים..." },
    header: {
      slogan: "ממכר כמה שזה טעים",
      menuOpen: "תפריט",
      menuClose: "סגירה"
    },
    lang: { label: "שפה" },
    brandTitle: "חומוסיית סמי",
    nav: { about: "אודות", menu: "תפריט", contact: "צור קשר", hours: "שעות פתיחה" },
    hero: {
      eyebrow: "ממכר כמה שזה טעים",
      title: "חומוסיית סמי",
      subtitle: "חומוס אמיתי, חומרי גלם איכותיים ואווירה שמרגישה כמו בית.",
      ctaMenu: "לתפריט",
      ctaVisit: "בואו לבקר"
    },
    chef: {
      kicker: "להכיר את הבעלים והשף",
      title: "הבעלים והשף — נאיף",
      p1: "נאיף הוא גם הבעלים וגם השף של החומוסייה, מבשל מכל הלב ומאמין שחומרי גלם איכותיים, ירקות טריים, תבלינים מדויקים ותשומת לב לפרטים הקטנים הם מה שעושה את החומוס שלנו כל כך מיוחד.",
      p2: "בנוסף לנסיון רב השנים שיש לו במטבח, הוא מצטיין קורס pro-chef של בית הספר \"דנון\" בתל אביב.",
      p3: "ועכשיו בטח כולכם שואלים: \"מי זה סמי?\" אז סמי הוא אבא של נאיף, והוא דור שני של משפחה שעסקה בחומוס מאז שנת 1969."
    },
    about: {
      kicker: "הסיפור שלנו",
      title: "חומוס טוב מתחיל בדברים הפשוטים",
      p1: "אצלנו מאמינים שחומוס טוב מתחיל מחומרי גלם איכותיים, הכנה טרייה מדי יום והמון אהבה למטבח.",
      p2: "אנו מגישים מנות טריות, עשירות בטעמים ובאווירה משפחתית, כדי שכל ביקור יהפוך לחוויה.",
      feature1Title: "חומרי גלם איכותיים",
      feature1Text: "טחינה משובחת, גרגירים מובחרים וירקות טריים.",
      feature2Title: "מוכן במקום",
      feature2Text: "כל מנה מוכנה באהבה ומוגשת טרייה.",
      badge: "טרי כל יום"
    },
    menu: {
      kicker: "התפריט שלנו",
      title: "הטעמים של סמי",
      subtitle: "בחרו קטגוריה וגלו את המנות שלנו.",
      reviewStrong: "נהניתם אצלנו?",
      reviewText: "החוויה שלכם חשובה לנו",
      reviewSoft: "נשמח לשמוע מכם",
      reviewLink: "שתפו אותנו",
      categories: { hummus: "ניגובים", sides: "ליד החומוס", drinks: "שתייה" }
    },
    contact: {
      kicker: "בואו לבקר",
      title: "מחכים לכם בחומוסיית סמי",
      mapTitle: "איך מגיעים אלינו",
      addressLabel: "כתובת",
      addressText: "מתחם תחנת דלק טן, בית העמק, 2511500",
      phoneLabel: "טלפון",
      emailLabel: "אימייל",
      hoursLabel: "שעות פתיחה",
      hoursLine1: "שני עד שבת: 08:30–16:00",
      hoursLine2: "ראשון: סגור",
      ratingSuffix: "מתוך 5 · Google",
      googleReviews: "צפייה בכל הביקורות בגוגל",
      mapNav: "נווט ב-Google Maps",
      mapSupport: "ניווט מהיר וישיר למסעדה",
      callCta: "חייגו אלינו",
      phoneAria: "חייגו אלינו לחומוסיית סמי",
      mapAria: "נווט לחומוסיית סמי ב-Google Maps"
    },
    reviews: {
      oneText: "השירות כאן מדהים, והחומוס טעים בטירוף. מומלץ לכל מי שרוצה חוויית אוכל אותנטית.",
      oneName: "דנה מ.",
      twoText: "טעים, נקי ומהר. בהחלט המקום הכי טוב לחומוס בסביבה, נחזור שוב בקרוב.",
      twoName: "יוסי נ.",
      threeText: "אווירה חמה, צוות ידידותי והחומוס פשוט עף. מצאתי מקום חדש לבילוי משפחתי.",
      threeName: "אילנה ק.",
      starsAria: "5 מתוך 5 כוכבים",
      prev: "חוות דעת קודמת",
      next: "חוות דעת הבאה",
      jumpTo: "מעבר לחוות דעת"
    },
    footer: {
      brandTitle: "חומוסיית סמי",
      brandText: "חומוס טרי, מנות נדיבות ואווירה משפחתית.",
      hoursTitle: "שעות פתיחה",
      hoursDays1: "ב׳–ש׳",
      hoursTime1: "08:30–16:00 או עד גמר המלאי",
      hoursDays2: "ראשון",
      hoursTime2: "סגור",
      follow: "עקבו אחרינו",
      riderLine: "רוכבים תמיד מוזמנים",
      copyright: "חומוסיית סמי. כל הזכויות שמורות."
    },
    menuItems: {
      hummus: [
        { name: "חומוס גרגירים", description: "חומוס עם גרגירים ומרקם עשיר.", price: "₪30" },
        { name: "חומוס טחינה", description: "חומוס עם שכבת טחינה עשירה.", price: "₪30" },
        { name: "חומוס משאוושה", description: "חומוס מועדף עם טעם עמוק ומיוחד.", price: "₪30" },
        { name: "חומוס פול", description: "חומוס עם פול מבושל ותבלינים.", price: "₪30" },
        { name: "חומוס פטריות ובצל", description: "חומוס עם פטריות ובצל מטוגן.", price: "₪47" },
        { name: "חומוס קומפלט", description: "חומוס עם שילוב עשיר של טעמים.", price: "₪30" },
        { name: "חומוס רגיל", description: "גרסה קלאסית ומרשימה.", price: "₪30" },
        { name: "חומוס עם בשר עגל", description: "חומוס עם בשר עגל איכותי.", price: "₪50" },
        { name: "חומוס עם בשר עגל, פטריות ובצל", description: "חומוס עם בשר עגל, פטריות ובצל.", price: "₪52" },
        { name: "חומוס עם עוף ובצל", description: "חומוס עם עוף ובצל מטוגן.", price: "₪50" },
        { name: "חומוס עם עוף, פטריות ובצל", description: "חומוס עם עוף, פטריות ובצל.", price: "₪52" },
        { name: "מנה משאוושה", description: "מנה מיוחדת עם טעם עשיר.", price: "₪30" },
        { name: "מנה פול", description: "מנה עם פול ותבלינים.", price: "₪30" },
        { name: "השקשוקה של סמי", description: "השקשוקה המיוחדת של סמי.", price: "₪51" },
        { name: "חמשוקה של סמי", description: "מנת חומוס-שקשוקה ייחודית.", price: "₪51" }
      ],
      sides: [
        { name: "סלט קטן", description: "סלט טרופי קליל ומרענן.", price: "₪24" },
        { name: "סלט גדול", description: "סלט גדול עם ירקות טריים ותיבול עשיר.", price: "₪32" },
        { name: "צ׳יפס קטן", description: "צ׳יפס פריך ומיני.", price: "₪24" },
        { name: "צ׳יפס גדול", description: "צ׳יפס גדול וקריספי.", price: "₪32" }
      ],
      drinks: [
        { name: "שתייה קלה", description: "שתייה קלה עם טעם פשוט ונעים.", price: "₪10" },
        { name: "קנקן לימונדה", description: "קנקן לימונדהRefreshing and fresh.", price: "₪25" }
      ]
    }
  },
  en: {
    loader: { message: "Preparing something delicious for you..." },
    header: {
      slogan: "So delicious, it’s addictive",
      menuOpen: "Menu",
      menuClose: "Close"
    },
    lang: { label: "Language" },
    brandTitle: "Hummus Sami",
    nav: { about: "About", menu: "Menu", contact: "Contact", hours: "Opening Hours" },
    hero: {
      eyebrow: "Addictive because it is so tasty",
      title: "Hummus Sami",
      subtitle: "Authentic hummus, quality ingredients, and a warm atmosphere that feels like home.",
      ctaMenu: "View Menu",
      ctaVisit: "Visit Us"
    },
    chef: {
      kicker: "Meet The Owner & Chef",
      title: "Owner & Chef — Naif",
      p1: "Naif is both the owner and chef of the restaurant. He cooks with heart and believes that quality ingredients, fresh vegetables, precise spices, and attention to detail are what make our hummus so special.",
      p2: "With many years of kitchen experience, he is also a distinguished graduate of the pro-chef program at Danon culinary school in Tel Aviv.",
      p3: "And now you are probably asking: \"Who is Sami?\" Sami is Naif's father, a second generation in a family that has worked with hummus since 1969."
    },
    about: {
      kicker: "Our Story",
      title: "Great Hummus Starts With Simplicity",
      p1: "We believe great hummus starts with quality ingredients, fresh daily preparation, and a lot of love for cooking.",
      p2: "We serve fresh, rich-flavored dishes in a family atmosphere to make every visit a memorable experience.",
      feature1Title: "Quality Ingredients",
      feature1Text: "Premium tahini, selected chickpeas, and fresh vegetables.",
      feature2Title: "Made On Site",
      feature2Text: "Every dish is prepared with care and served fresh.",
      badge: "Fresh Daily"
    },
    menu: {
      kicker: "Our Menu",
      title: "Sami's Flavors",
      subtitle: "Choose a category and discover our dishes.",
      reviewStrong: "Enjoyed your visit?",
      reviewText: "Your experience matters to us",
      reviewSoft: "We’d love to hear from you",
      reviewLink: "Share your thoughts",
      categories: { hummus: "Hummus Dishes", sides: "Sides", drinks: "Drinks" }
    },
    contact: {
      kicker: "Come Visit",
      title: "We're Waiting For You At Hummus Sami",
      mapTitle: "Find Us",
      addressLabel: "Address",
      addressText: "Ten gas station complex, Beit HaEmek, 2511500",
      phoneLabel: "Phone",
      emailLabel: "Email",
      hoursLabel: "Opening Hours",
      hoursLine1: "Monday to Saturday: 08:30–16:00",
      hoursLine2: "Sunday: Closed",
      ratingSuffix: "out of 5 · Google",
      googleReviews: "See All Google Reviews",
      mapNav: "Navigate with Google Maps",
      mapSupport: "Quick and direct navigation to the restaurant",
      callCta: "Call Us",
      phoneAria: "Call Hummus Sami",
      mapAria: "Navigate to Hummus Sami in Google Maps"
    },
    reviews: {
      oneText: "The service here is amazing, and the hummus is incredibly tasty. Highly recommended for anyone seeking an authentic food experience.",
      oneName: "Dana M.",
      twoText: "Tasty, clean, and fast. Definitely the best hummus place around, we will return soon.",
      twoName: "Yossi N.",
      threeText: "Warm atmosphere, friendly team, and hummus that is simply outstanding. I found a new family favorite place.",
      threeName: "Ilana K.",
      starsAria: "5 out of 5 stars",
      prev: "Previous review",
      next: "Next review",
      jumpTo: "Go to review"
    },
    footer: {
      brandTitle: "Hummus Sami",
      brandText: "Fresh hummus, generous dishes, and a family atmosphere.",
      hoursTitle: "Opening Hours",
      hoursDays1: "Mon–Sat",
      hoursTime1: "08:30–16:00 or until sold out",
      hoursDays2: "Sunday",
      hoursTime2: "Closed",
      follow: "Follow Us",
      riderLine: "רוכבים תמיד מוזמנים",
      copyright: "Hummus Sami. All rights reserved."
    },
    menuItems: {
      hummus: [
        { name: "Chickpea Hummus", description: "Hummus with whole chickpeas and rich texture.", price: "₪30" },
        { name: "Tahini Hummus", description: "Hummus topped with rich tahini.", price: "₪30" },
        { name: "Msabbaha Hummus", description: "A favorite hummus with deep, unique flavor.", price: "₪30" },
        { name: "Foul Hummus", description: "Hummus with cooked fava beans and spices.", price: "₪30" },
        { name: "Hummus with Mushrooms & Onions", description: "Hummus with sauteed mushrooms and onions.", price: "₪47" },
        { name: "Hummus Complete", description: "Hummus with a rich combination of flavors.", price: "₪30" },
        { name: "Classic Hummus", description: "Classic and impressive version.", price: "₪30" },
        { name: "Hummus with Veal", description: "Hummus with quality veal meat.", price: "₪50" },
        { name: "Hummus with Veal, Mushrooms & Onions", description: "Hummus with veal, mushrooms, and onions.", price: "₪52" },
        { name: "Hummus with Chicken & Onions", description: "Hummus with chicken and sauteed onions.", price: "₪50" },
        { name: "Hummus with Chicken, Mushrooms & Onions", description: "Hummus with chicken, mushrooms, and onions.", price: "₪52" },
        { name: "Msabbaha Plate", description: "Special plate with rich flavor.", price: "₪30" },
        { name: "Foul Plate", description: "Plate with fava beans and spices.", price: "₪30" },
        { name: "Sami's Shakshuka", description: "Sami's special shakshuka.", price: "₪51" },
        { name: "Sami's Hummshuka", description: "Unique hummus-shakshuka dish.", price: "₪51" }
      ],
      sides: [
        { name: "Small Salad", description: "Light and refreshing salad.", price: "₪24" },
        { name: "Large Salad", description: "Large salad with fresh vegetables and rich seasoning.", price: "₪32" },
        { name: "Small Fries", description: "Crispy mini fries.", price: "₪24" },
        { name: "Large Fries", description: "Large and crispy fries.", price: "₪32" }
      ],
      drinks: [
        { name: "Soft Drink", description: "Refreshing soft drink.", price: "₪10" },
        { name: "Lemonade Pitcher", description: "Fresh lemonade pitcher.", price: "₪25" }
      ]
    }
  },
  ar: {
    loader: { message: "نحضّر لكم شيئاً لذيذاً..." },
    header: {
      slogan: "لذيذ لدرجة الإدمان",
      menuOpen: "القائمة",
      menuClose: "إغلاق"
    },
    lang: { label: "اللغة" },
    brandTitle: "حمص سامي",
    nav: { about: "من نحن", menu: "القائمة", contact: "تواصل", hours: "ساعات العمل" },
    hero: {
      eyebrow: "إدمان من شدة الطعم",
      title: "حمص سامي",
      subtitle: "حمص أصيل، مكونات عالية الجودة، وأجواء دافئة تشبه البيت.",
      ctaMenu: "القائمة",
      ctaVisit: "زورونا"
    },
    chef: {
      kicker: "تعرفوا على المالك والشيف",
      title: "المالك والشيف — نايف",
      p1: "نايف هو صاحب المطعم والشيف فيه، يطبخ من القلب ويؤمن أن المكونات العالية الجودة والخضار الطازجة والتوابل الدقيقة والاهتمام بالتفاصيل هي سر تميز حمصنا.",
      p2: "إضافة إلى خبرته الطويلة في المطبخ، فهو متفوق في دورة pro-chef في مدرسة دانون في تل أبيب.",
      p3: "والآن تسألون: من هو سمي؟ سمي هو والد نايف، وهو الجيل الثاني لعائلة تعمل في الحمص منذ عام 1969."
    },
    about: {
      kicker: "قصتنا",
      title: "الحمص الجيد يبدأ من البساطة",
      p1: "نؤمن أن الحمص الممتاز يبدأ بمكونات عالية الجودة وتحضير يومي طازج وحب كبير للمطبخ.",
      p2: "نقدم أطباقاً طازجة وغنية بالنكهات في أجواء عائلية لتكون كل زيارة تجربة مميزة.",
      feature1Title: "مكونات عالية الجودة",
      feature1Text: "طحينة ممتازة، حمص مختار، وخضار طازجة.",
      feature2Title: "يُحضّر في المكان",
      feature2Text: "كل طبق يُحضّر بمحبة ويُقدّم طازجاً.",
      badge: "طازج يومياً"
    },
    menu: {
      kicker: "قائمتنا",
      title: "نكهات سمي",
      subtitle: "اختاروا فئة واكتشفوا أطباقنا.",
      reviewStrong: "استمتعتم بزيارتكم؟",
      reviewText: "تجربتكم تهمنا",
      reviewSoft: "يسعدنا سماع رأيكم",
      reviewLink: "شاركونا رأيكم",
      categories: { hummus: "أطباق الحمص", sides: "إلى جانب الحمص", drinks: "مشروبات" }
    },
    contact: {
      kicker: "تفضلوا بزيارتنا",
      title: "بانتظاركم في حمصية سمي",
      mapTitle: "كيف تصلون إلينا",
      addressLabel: "العنوان",
      addressText: "مجمع محطة تن، بيت هعيمق، 2511500",
      phoneLabel: "الهاتف",
      emailLabel: "البريد الإلكتروني",
      hoursLabel: "ساعات العمل",
      hoursLine1: "الاثنين حتى السبت: 08:30–16:00",
      hoursLine2: "الأحد: مغلق",
      ratingSuffix: "من 5 · Google",
      googleReviews: "عرض كل تقييمات Google",
      mapNav: "التنقّل عبر Google Maps",
      mapSupport: "تنقّل سريع ومباشر إلى المطعم",
      callCta: "اتصلوا بنا",
      phoneAria: "اتصلوا بحمص سامي",
      mapAria: "التنقّل إلى حمص سامي عبر Google Maps"
    },
    reviews: {
      oneText: "الخدمة هنا رائعة والحمص لذيذ جداً. ننصح به لكل من يريد تجربة طعام أصيلة.",
      oneName: "دانا م.",
      twoText: "لذيذ، نظيف وسريع. بالتأكيد أفضل مكان حمص في المنطقة وسنعود قريباً.",
      twoName: "يوسي ن.",
      threeText: "أجواء دافئة، طاقم ودود، وحمص ممتاز جداً. وجدت مكاناً عائلياً جديداً.",
      threeName: "إيلانا ك.",
      starsAria: "5 من 5 نجوم",
      prev: "التقييم السابق",
      next: "التقييم التالي",
      jumpTo: "الانتقال إلى تقييم"
    },
    footer: {
      brandTitle: "حمص سامي",
      brandText: "حمص طازج، أطباق سخية وأجواء عائلية.",
      hoursTitle: "ساعات العمل",
      hoursDays1: "الاثنين–السبت",
      hoursTime1: "08:30–16:00 أو حتى نفاد الكمية",
      hoursDays2: "الأحد",
      hoursTime2: "مغلق",
      follow: "تابعونا",
      riderLine: "רוכבים תמיד מוזמנים",
      copyright: "حمصية سمي. جميع الحقوق محفوظة."
    },
    menuItems: {
      hummus: [
        { name: "حمص حب", description: "حمص مع حبّات حمص وقوام غني.", price: "₪30" },
        { name: "حمص طحينة", description: "حمص مع طبقة طحينة غنية.", price: "₪30" },
        { name: "حمص مسبحة", description: "طبق حمص مميز بنكهة عميقة.", price: "₪30" },
        { name: "حمص فول", description: "حمص مع فول مطبوخ وتوابل.", price: "₪30" },
        { name: "حمص مع فطر وبصل", description: "حمص مع فطر وبصل مقلي.", price: "₪47" },
        { name: "حمص كومبليت", description: "حمص مع تركيبة غنية من النكهات.", price: "₪30" },
        { name: "حمص عادي", description: "نسخة كلاسيكية مميزة.", price: "₪30" },
        { name: "حمص مع لحم عجل", description: "حمص مع لحم عجل فاخر.", price: "₪50" },
        { name: "حمص مع لحم عجل وفطر وبصل", description: "حمص مع لحم عجل وفطر وبصل.", price: "₪52" },
        { name: "حمص مع دجاج وبصل", description: "حمص مع دجاج وبصل مقلي.", price: "₪50" },
        { name: "حمص مع دجاج وفطر وبصل", description: "حمص مع دجاج وفطر وبصل.", price: "₪52" },
        { name: "طبق مسبحة", description: "طبق خاص بنكهة غنية.", price: "₪30" },
        { name: "طبق فول", description: "طبق فول مع توابل.", price: "₪30" },
        { name: "شكشوكة سمي", description: "الشكشوكة المميزة لسمي.", price: "₪51" },
        { name: "حمشكوكة سمي", description: "طبق حمص شكشوكة مميز.", price: "₪51" }
      ],
      sides: [
        { name: "سلطة صغيرة", description: "سلطة خفيفة ومنعشة.", price: "₪24" },
        { name: "سلطة كبيرة", description: "سلطة كبيرة بخضار طازجة وتتبيل غني.", price: "₪32" },
        { name: "بطاطا صغيرة", description: "بطاطا مقلية مقرمشة.", price: "₪24" },
        { name: "بطاطا كبيرة", description: "بطاطا مقلية كبيرة ومقرمشة.", price: "₪32" }
      ],
      drinks: [
        { name: "مشروب غازي", description: "مشروب منعش.", price: "₪10" },
        { name: "إبريق ليمونادة", description: "إبريق ليمونادة طازجة.", price: "₪25" }
      ]
    }
  },
  ru: {
    loader: { message: "Готовим для вас что-то вкусное..." },
    header: {
      slogan: "Настолько вкусно, что невозможно остановиться",
      menuOpen: "Меню",
      menuClose: "Закрыть"
    },
    lang: { label: "Язык" },
    brandTitle: "Hummus Sami",
    nav: { about: "О нас", menu: "Меню", contact: "Контакты", hours: "Часы работы" },
    hero: {
      eyebrow: "Настолько вкусно, что вызывает зависимость",
      title: "Hummus Sami",
      subtitle: "Настоящий хумус, качественные ингредиенты и семейная атмосфера, как дома.",
      ctaMenu: "К меню",
      ctaVisit: "Приходите"
    },
    chef: {
      kicker: "Познакомьтесь с владельцем и шефом",
      title: "Владелец и шеф — Наиф",
      p1: "Наиф — одновременно владелец и шеф. Он готовит от души и уверен, что качественные продукты, свежие овощи, точные специи и внимание к деталям делают наш хумус особенным.",
      p2: "Кроме многолетнего опыта на кухне, он окончил курс pro-chef в кулинарной школе Danon в Тель-Авиве.",
      p3: "И теперь вы, наверное, спрашиваете: кто такой Сами? Сами — отец Наифа, второе поколение семьи, которая занимается хумусом с 1969 года."
    },
    about: {
      kicker: "Наша история",
      title: "Хороший хумус начинается с простого",
      p1: "Мы верим, что отличный хумус начинается с качественных ингредиентов, ежедневной свежей готовки и большой любви к кухне.",
      p2: "Мы подаем свежие блюда с насыщенным вкусом и семейной атмосферой, чтобы каждый визит становился особенным.",
      feature1Title: "Качественные ингредиенты",
      feature1Text: "Отличная тхина, отборный нут и свежие овощи.",
      feature2Title: "Готовится на месте",
      feature2Text: "Каждое блюдо готовится с любовью и подается свежим.",
      badge: "Свежо каждый день"
    },
    menu: {
      kicker: "Наше меню",
      title: "Вкусы Сами",
      subtitle: "Выберите категорию и откройте наши блюда.",
      reviewStrong: "Вам понравилось у нас?",
      reviewText: "Ваши впечатления важны для нас",
      reviewSoft: "Будем рады вашему отзыву",
      reviewLink: "Поделиться впечатлением",
      categories: { hummus: "Блюда с хумусом", sides: "К хумусу", drinks: "Напитки" }
    },
    contact: {
      kicker: "Заходите",
      title: "Ждем вас в Hummus Sami",
      mapTitle: "Как нас найти",
      addressLabel: "Адрес",
      addressText: "Комплекс заправки Ten, Бейт-ха-Эмек, 2511500",
      phoneLabel: "Телефон",
      emailLabel: "Эл. почта",
      hoursLabel: "Часы работы",
      hoursLine1: "Понедельник–суббота: 08:30–16:00",
      hoursLine2: "Воскресенье: закрыто",
      ratingSuffix: "из 5 · Google",
      googleReviews: "Смотреть все отзывы в Google",
      mapNav: "Открыть маршрут в Google Maps",
      mapSupport: "Быстрая и прямая навигация к ресторану",
      callCta: "Позвонить",
      phoneAria: "Позвонить в Hummus Sami",
      mapAria: "Построить маршрут к Hummus Sami в Google Maps"
    },
    reviews: {
      oneText: "Отличный сервис, а хумус невероятно вкусный. Рекомендуем всем, кто хочет аутентичную кухню.",
      oneName: "Дана М.",
      twoText: "Вкусно, чисто и быстро. Определенно лучшее место с хумусом поблизости, скоро вернемся.",
      twoName: "Йоси Н.",
      threeText: "Теплая атмосфера, дружелюбная команда и просто превосходный хумус. Нашли новое любимое семейное место.",
      threeName: "Илана К.",
      starsAria: "5 из 5 звезд",
      prev: "Предыдущий отзыв",
      next: "Следующий отзыв",
      jumpTo: "Перейти к отзыву"
    },
    footer: {
      brandTitle: "Hummus Sami",
      brandText: "Свежий хумус, щедрые блюда и семейная атмосфера.",
      hoursTitle: "Часы работы",
      hoursDays1: "Пн–Сб",
      hoursTime1: "08:30–16:00 или до окончания",
      hoursDays2: "Воскресенье",
      hoursTime2: "Закрыто",
      follow: "Мы в соцсетях",
      riderLine: "רוכבים תמיד מוזמנים",
      copyright: "Hummus Sami. Все права защищены."
    },
    menuItems: {
      hummus: [
        { name: "Хумус с нутом", description: "Хумус с цельным нутом и насыщенной текстурой.", price: "₪30" },
        { name: "Хумус с тахини", description: "Хумус с щедрым слоем тахини.", price: "₪30" },
        { name: "Хумус Мсабаха", description: "Любимый хумус с глубоким особым вкусом.", price: "₪30" },
        { name: "Хумус с фулем", description: "Хумус с вареными бобами и специями.", price: "₪30" },
        { name: "Хумус с грибами и луком", description: "Хумус с жареными грибами и луком.", price: "₪47" },
        { name: "Хумус Комплет", description: "Хумус с богатым сочетанием вкусов.", price: "₪30" },
        { name: "Классический хумус", description: "Классическая и эффектная версия.", price: "₪30" },
        { name: "Хумус с телятиной", description: "Хумус с качественной телятиной.", price: "₪50" },
        { name: "Хумус с телятиной, грибами и луком", description: "Хумус с телятиной, грибами и луком.", price: "₪52" },
        { name: "Хумус с курицей и луком", description: "Хумус с курицей и жареным луком.", price: "₪50" },
        { name: "Хумус с курицей, грибами и луком", description: "Хумус с курицей, грибами и луком.", price: "₪52" },
        { name: "Порция Мсабаха", description: "Особое блюдо с насыщенным вкусом.", price: "₪30" },
        { name: "Порция фуль", description: "Блюдо с бобами и специями.", price: "₪30" },
        { name: "Шакшука Сами", description: "Фирменная шакшука от Сами.", price: "₪51" },
        { name: "Хумшука Сами", description: "Уникальное блюдо хумус-шакшука.", price: "₪51" }
      ],
      sides: [
        { name: "Маленький салат", description: "Легкий и освежающий салат.", price: "₪24" },
        { name: "Большой салат", description: "Большой салат из свежих овощей и насыщенной заправки.", price: "₪32" },
        { name: "Маленький картофель фри", description: "Хрустящий мини фри.", price: "₪24" },
        { name: "Большой картофель фри", description: "Большой хрустящий картофель фри.", price: "₪32" }
      ],
      drinks: [
        { name: "Прохладительный напиток", description: "Освежающий прохладительный напиток.", price: "₪10" },
        { name: "Кувшин лимонада", description: "Свежий лимонад в кувшине.", price: "₪25" }
      ]
    }
  }
};

const STORAGE_KEY = "hummus-sami-language";
const menuGrid = document.getElementById("menuGrid");
const categoryButtons = document.querySelectorAll(".category-btn");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const langSelector = document.getElementById("langSelector");
const langToggle = document.getElementById("langToggle");
const langMenu = document.getElementById("langMenu");
const activeLanguageLabel = document.getElementById("activeLanguageLabel");
const langButtons = document.querySelectorAll(".lang-option[data-set-lang]");
const reviewPrevButton = document.querySelector(".reviews-prev");
const reviewNextButton = document.querySelector(".reviews-next");
const reviewStarNodes = document.querySelectorAll(".review-stars");
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");
const menuToggleLabel = document.querySelector(".menu-toggle-label");
const metadataNodes = {
  siteName: document.querySelector('meta[property="og:site_name"]'),
  ogTitle: document.querySelector('meta[property="og:title"]'),
  twitterTitle: document.querySelector('meta[name="twitter:title"]'),
  jsonLd: document.getElementById("restaurantJsonLd")
};
const defaultMetadata = {
  title: document.title,
  siteName: metadataNodes.siteName ? metadataNodes.siteName.getAttribute("content") : "",
  ogTitle: metadataNodes.ogTitle ? metadataNodes.ogTitle.getAttribute("content") : "",
  twitterTitle: metadataNodes.twitterTitle ? metadataNodes.twitterTitle.getAttribute("content") : "",
  jsonLdName: (() => {
    if (!metadataNodes.jsonLd) {
      return "";
    }

    try {
      const parsed = JSON.parse(metadataNodes.jsonLd.textContent || "{}");
      return typeof parsed.name === "string" ? parsed.name : "";
    } catch (_error) {
      return "";
    }
  })()
};
let revealObserver = null;
let menuLabelSwitchTimeout = null;

let currentLanguage = "he";

function getStoredLanguage() {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored && languageConfig[stored]) {
      return stored;
    }
  } catch (_error) {
    return "he";
  }
  return "he";
}

function setStoredLanguage(language) {
  try {
    window.localStorage.setItem(STORAGE_KEY, language);
  } catch (_error) {
    // Ignore storage failures to keep UX smooth.
  }
}

function getNestedValue(object, path) {
  return path.split(".").reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), object);
}

function getCurrentContent() {
  return content[currentLanguage] || content.he;
}

function getCurrentCategory() {
  const active = document.querySelector(".category-btn.active");
  return active ? active.dataset.category : "hummus";
}

function updateLanguageLabels() {
  activeLanguageLabel.textContent = languageConfig[currentLanguage].label;
  langButtons.forEach((button) => {
    const isActive = button.dataset.setLang === currentLanguage;
    button.setAttribute("aria-pressed", isActive ? "true" : "false");
  });
}

function updateMetadata() {
  const dictionary = getCurrentContent();
  const isArabic = currentLanguage === "ar";
  const titleText = isArabic ? dictionary.brandTitle : defaultMetadata.title;
  const siteNameText = isArabic ? dictionary.brandTitle : defaultMetadata.siteName;
  const ogTitleText = isArabic ? dictionary.brandTitle : defaultMetadata.ogTitle;
  const twitterTitleText = isArabic ? dictionary.brandTitle : defaultMetadata.twitterTitle;
  const jsonLdNameText = isArabic ? dictionary.brandTitle : defaultMetadata.jsonLdName;

  document.title = titleText;

  if (metadataNodes.siteName && siteNameText) {
    metadataNodes.siteName.setAttribute("content", siteNameText);
  }
  if (metadataNodes.ogTitle && ogTitleText) {
    metadataNodes.ogTitle.setAttribute("content", ogTitleText);
  }
  if (metadataNodes.twitterTitle && twitterTitleText) {
    metadataNodes.twitterTitle.setAttribute("content", twitterTitleText);
  }

  if (metadataNodes.jsonLd && jsonLdNameText) {
    try {
      const parsed = JSON.parse(metadataNodes.jsonLd.textContent || "{}");
      parsed.name = jsonLdNameText;
      metadataNodes.jsonLd.textContent = JSON.stringify(parsed, null, 2);
    } catch (_error) {
      // Ignore malformed JSON-LD so language switching remains stable.
    }
  }
}

function setMenuToggleLabelText(nextLabel, animate = false) {
  if (!menuToggleLabel) {
    return;
  }

  const currentLabel = menuToggleLabel.textContent.trim();
  if (currentLabel === nextLabel) {
    return;
  }

  if (!animate || prefersReducedMotion) {
    menuToggleLabel.textContent = nextLabel;
    return;
  }

  if (menuLabelSwitchTimeout) {
    window.clearTimeout(menuLabelSwitchTimeout);
    menuLabelSwitchTimeout = null;
  }

  menuToggleLabel.classList.remove("is-in");
  menuToggleLabel.classList.add("is-out");

  menuLabelSwitchTimeout = window.setTimeout(() => {
    menuToggleLabel.textContent = nextLabel;
    menuToggleLabel.classList.remove("is-out");
    menuToggleLabel.classList.add("is-in");

    menuLabelSwitchTimeout = window.setTimeout(() => {
      menuToggleLabel.classList.remove("is-in");
      menuLabelSwitchTimeout = null;
    }, 240);
  }, 120);
}

function updateMenuToggleLabel(animate = false) {
  if (!toggle || !menuToggleLabel || !nav) {
    return;
  }

  const dictionary = getCurrentContent();
  const isOpen = nav.classList.contains("open");
  const nextLabel = isOpen ? dictionary.header.menuClose : dictionary.header.menuOpen;
  setMenuToggleLabelText(nextLabel, animate);
  toggle.setAttribute("aria-label", nextLabel);
}

function applyStaticTranslations() {
  const dictionary = getCurrentContent();

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const value = getNestedValue(dictionary, node.dataset.i18n);
    if (typeof value !== "string") {
      return;
    }
    node.textContent = value;
  });

  const callLinks = document.querySelectorAll('a[href^="tel:+972509942222"]');
  callLinks.forEach((link) => {
    link.setAttribute("aria-label", dictionary.contact.phoneAria);
  });

  const mapActionLink = document.querySelector("[data-map-link='true']");
  if (mapActionLink && dictionary.contact.mapAria) {
    mapActionLink.setAttribute("aria-label", dictionary.contact.mapAria);
  }

  reviewStarNodes.forEach((node) => {
    node.setAttribute("aria-label", dictionary.reviews.starsAria);
  });

  if (reviewPrevButton) {
    reviewPrevButton.setAttribute("aria-label", dictionary.reviews.prev);
  }
  if (reviewNextButton) {
    reviewNextButton.setAttribute("aria-label", dictionary.reviews.next);
  }

  document.querySelectorAll(".reviews-dot").forEach((dot, index) => {
    dot.setAttribute("aria-label", `${dictionary.reviews.jumpTo} ${index + 1}`);
  });

  const pageLang = languageConfig[currentLanguage];
  document.documentElement.lang = currentLanguage;
  document.documentElement.dir = pageLang.dir;
  updateMetadata();
}

function renderMenu(category) {
  const dictionary = getCurrentContent();
  const items = (dictionary.menuItems && dictionary.menuItems[category]) || [];
  const hideDescription = category === "sides" || category === "drinks";

  menuGrid.innerHTML = items.map((item, index) => `
    <article class="menu-item reveal${hideDescription ? " compact-card" : ""}" style="--stagger:${index % 7};">
      <div class="menu-item-body">
        <div class="menu-title-wrap">
          <h3>${item.name}</h3>
        </div>
        ${hideDescription ? "" : `<p>${item.description}</p>`}
      </div>
      <span class="price" aria-label="מחיר ${item.price}">${item.price}</span>
    </article>
  `).join("");

  observeReveals(menuGrid);
}

function closeLanguageMenu() {
  if (!langSelector || !langToggle) {
    return;
  }
  langSelector.classList.remove("open");
  langToggle.setAttribute("aria-expanded", "false");
}

function applyLanguage(language) {
  if (!languageConfig[language]) {
    return;
  }
  currentLanguage = language;
  setStoredLanguage(language);
  applyStaticTranslations();
  updateLanguageLabels();
  updateMenuToggleLabel();
  renderMenu(getCurrentCategory());
}

function switchLanguage(language) {
  if (!languageConfig[language] || language === currentLanguage) {
    closeLanguageMenu();
    return;
  }

  if (prefersReducedMotion) {
    applyLanguage(language);
    closeLanguageMenu();
    return;
  }

  document.body.classList.add("lang-transition", "lang-fade");
  window.setTimeout(() => {
    applyLanguage(language);
    document.body.classList.remove("lang-fade");
    window.setTimeout(() => {
      document.body.classList.remove("lang-transition");
    }, 220);
  }, 120);

  closeLanguageMenu();
}

categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    categoryButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    renderMenu(button.dataset.category);
  });
});

langButtons.forEach((button) => {
  button.addEventListener("click", () => {
    switchLanguage(button.dataset.setLang);
  });
});

if (langToggle && langSelector) {
  langToggle.addEventListener("click", () => {
    const isOpen = langSelector.classList.toggle("open");
    langToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  document.addEventListener("click", (event) => {
    if (!langSelector.contains(event.target)) {
      closeLanguageMenu();
    }
  });
}

function closeMenu() {
  if (!nav || !toggle) {
    return;
  }

  nav.classList.remove("open");
  document.body.classList.remove("menu-open");
  toggle.setAttribute("aria-expanded", "false");
  updateMenuToggleLabel(true);
}

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    document.body.classList.toggle("menu-open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
    updateMenuToggleLabel(true);
  });
}

document.querySelectorAll(".main-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    closeMenu();
  });
});

document.addEventListener("click", (event) => {
  if (!nav || !toggle) {
    return;
  }

  if (!nav.classList.contains("open")) {
    return;
  }
  if (nav.contains(event.target) || toggle.contains(event.target)) {
    return;
  }
  closeMenu();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
    closeLanguageMenu();
  }
});

const header = document.querySelector(".site-header");
let scrollTicking = false;

function updateHeaderState() {
  if (!header) {
    scrollTicking = false;
    return;
  }

  header.classList.toggle("scrolled", window.scrollY > 20);
  scrollTicking = false;
}

window.addEventListener("scroll", () => {
  if (scrollTicking) {
    return;
  }
  scrollTicking = true;
  window.requestAnimationFrame(updateHeaderState);
}, { passive: true });

function initRevealObserver() {
  if (prefersReducedMotion) {
    document.querySelectorAll(".reveal").forEach((element) => {
      element.classList.add("visible");
    });
    return;
  }

  if (!revealObserver) {
    revealObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        entry.target.classList.add("visible");
        obs.unobserve(entry.target);
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -30px 0px" });
  }

  observeReveals(document);
}

function observeReveals(scope) {
  if (prefersReducedMotion) {
    scope.querySelectorAll(".reveal").forEach((element) => {
      element.classList.add("visible");
    });
    return;
  }

  if (!revealObserver) {
    return;
  }

  scope.querySelectorAll(".reveal").forEach((element) => {
    if (element.classList.contains("visible")) {
      return;
    }
    revealObserver.observe(element);
  });
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    const targetId = anchor.getAttribute("href");
    if (!targetId || targetId === "#") {
      return;
    }
    const target = document.querySelector(targetId);
    if (!target) {
      return;
    }

    event.preventDefault();
    const behavior = prefersReducedMotion ? "auto" : "smooth";
    target.scrollIntoView({ behavior, block: "start" });
    history.replaceState(null, "", targetId);
  });
});

function setupReviewsSlider() {
  const slider = document.querySelector(".reviews-slider");
  if (!slider) {
    return;
  }

  const track = slider.querySelector(".reviews-track");
  const cards = Array.from(slider.querySelectorAll(".review-card"));
  const prevButton = slider.querySelector(".reviews-prev");
  const nextButton = slider.querySelector(".reviews-next");
  const dotsWrap = document.querySelector(".reviews-dots");
  const viewport = slider.querySelector(".reviews-viewport");

  let currentIndex = 0;
  let cardsPerView = 1;
  let maxIndex = 0;
  let autoplayId = null;
  let touchStartX = 0;
  let touchEndX = 0;

  function calculateCardsPerView() {
    if (window.innerWidth >= 1024) {
      return 3;
    }
    if (window.innerWidth >= 768) {
      return 2;
    }
    return 1;
  }

  function createDots() {
    const dictionary = getCurrentContent();
    dotsWrap.innerHTML = "";
    for (let i = 0; i <= maxIndex; i += 1) {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = "reviews-dot";
      dot.setAttribute("aria-label", `${dictionary.reviews.jumpTo} ${i + 1}`);
      dot.addEventListener("click", () => {
        goTo(i);
      });
      dotsWrap.append(dot);
    }
  }

  function updateDots() {
    const dots = dotsWrap.querySelectorAll(".reviews-dot");
    dots.forEach((dot, index) => {
      const isActive = index === currentIndex;
      dot.classList.toggle("active", isActive);
      dot.setAttribute("aria-current", isActive ? "true" : "false");
    });
  }

  function updateButtons() {
    prevButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex === maxIndex;
  }

  function updateTrackPosition() {
    const cardWidth = 100 / cardsPerView;
    track.classList.add("is-transitioning");
    track.style.transform = `translateX(${currentIndex * cardWidth}%)`;
    window.setTimeout(() => {
      track.classList.remove("is-transitioning");
    }, 280);
    updateDots();
    updateButtons();
  }

  function goTo(index) {
    currentIndex = Math.max(0, Math.min(index, maxIndex));
    updateTrackPosition();
  }

  function next() {
    if (currentIndex >= maxIndex) {
      goTo(0);
      return;
    }
    goTo(currentIndex + 1);
  }

  function previous() {
    if (currentIndex <= 0) {
      goTo(maxIndex);
      return;
    }
    goTo(currentIndex - 1);
  }

  function stopAutoplay() {
    if (!autoplayId) {
      return;
    }
    window.clearInterval(autoplayId);
    autoplayId = null;
  }

  function startAutoplay() {
    stopAutoplay();
    if (prefersReducedMotion) {
      return;
    }
    autoplayId = window.setInterval(next, 5500);
  }

  function onResize() {
    const nextCardsPerView = calculateCardsPerView();
    if (nextCardsPerView === cardsPerView) {
      return;
    }
    cardsPerView = nextCardsPerView;
    maxIndex = Math.max(0, cards.length - cardsPerView);
    if (currentIndex > maxIndex) {
      currentIndex = maxIndex;
    }

    track.style.setProperty("--cards-per-view", String(cardsPerView));
    createDots();
    updateTrackPosition();
  }

  prevButton.addEventListener("click", () => {
    previous();
  });

  nextButton.addEventListener("click", () => {
    next();
  });

  slider.addEventListener("mouseenter", stopAutoplay);
  slider.addEventListener("mouseleave", startAutoplay);
  slider.addEventListener("focusin", stopAutoplay);
  slider.addEventListener("focusout", startAutoplay);

  viewport.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      next();
      stopAutoplay();
    }
    if (event.key === "ArrowRight") {
      previous();
      stopAutoplay();
    }
  });

  viewport.addEventListener("touchstart", (event) => {
    touchStartX = event.changedTouches[0].clientX;
  }, { passive: true });

  viewport.addEventListener("touchend", (event) => {
    touchEndX = event.changedTouches[0].clientX;
    const delta = touchStartX - touchEndX;
    if (Math.abs(delta) < 35) {
      return;
    }
    if (delta > 0) {
      next();
    } else {
      previous();
    }
    stopAutoplay();
  }, { passive: true });

  window.addEventListener("resize", onResize, { passive: true });

  cardsPerView = calculateCardsPerView();
  maxIndex = Math.max(0, cards.length - cardsPerView);
  track.style.setProperty("--cards-per-view", String(cardsPerView));
  createDots();
  updateTrackPosition();
  startAutoplay();
}

function initLoader() {
  const loader = document.getElementById("siteLoader");
  if (!loader) {
    return;
  }

  const startTime = performance.now();
  const minVisibleTime = 240;
  const maxVisibleTime = 1000;
  let hidden = false;

  function waitForImage(image) {
    if (!image) {
      return Promise.resolve();
    }

    if (image.complete && image.naturalWidth > 0) {
      return Promise.resolve();
    }

    return new Promise((resolve) => {
      const finish = () => resolve();
      image.addEventListener("load", finish, { once: true });
      image.addEventListener("error", finish, { once: true });
    });
  }

  function hideLoader() {
    if (hidden) {
      return;
    }
    hidden = true;
    document.body.classList.remove("is-loading");
    document.body.classList.add("is-loaded");
    loader.classList.add("is-hidden");
    initRevealObserver();
  }

  const heroImage = document.querySelector(".hero-media img");
  const brandLogo = document.querySelector(".brand-logo");
  const criticalAssets = Promise.allSettled([
    waitForImage(heroImage),
    waitForImage(brandLogo),
    document.fonts ? document.fonts.ready : Promise.resolve()
  ]);

  criticalAssets.then(() => {
    const elapsed = performance.now() - startTime;
    window.setTimeout(hideLoader, Math.max(0, minVisibleTime - elapsed));
  });

  window.setTimeout(hideLoader, maxVisibleTime);
}

document.getElementById("year").textContent = new Date().getFullYear();
setupReviewsSlider();
updateHeaderState();
applyLanguage(getStoredLanguage());
initLoader();
