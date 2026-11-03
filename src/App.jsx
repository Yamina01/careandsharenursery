import { useEffect, useState } from "react";
import "./App.css";

/* =====================================================================
   CARE & SHARE NURSERY (حضانة كير أند شير) - Khalifa City, Abu Dhabi
   Website preview
   ---------------------------------------------------------------------
   - Single-file React app. Only dependency: React.
   - English + Arabic (RTL) with a language switch in the header.
   - REAL content used: name, address, phone, Google rating (3.9 / 19
     reviews), review topics, and two real parent reviews from Google
     Maps (the first is the opening of a longer review; the second is
     trimmed before its last sentence, see REVIEWS below).
   - The 3.9 rating is shown honestly in the reviews section but is not
     the hero headline; the hero leads with the warmth parents describe.
   - SAMPLE CONTENT, confirm with the nursery before launch: age groups
     (daycare from 6 months comes from a review), daily schedule,
     Monday to Friday opening days and closing time, safety points,
     admission steps, gallery photos.
   - To use real photos: add a `src` to any item in TILES below.
   - To make the enquiry form work: send `form` to Formspree / EmailJS /
     your backend inside onSubmit (see Contact component).
   ===================================================================== */

const CONTACT = {
  phoneDisplay: "+971 50 329 0760",
  phoneTel: "+971503290760",
  whatsapp: "971503290760",
  // Plus code from the Google Maps listing: CH6C+4P Abu Dhabi
  mapEmbed: "https://www.google.com/maps?q=CH6C%2B4P%20Abu%20Dhabi&output=embed",
  mapLink: "https://www.google.com/maps/search/?api=1&query=CH6C%2B4P%20Abu%20Dhabi",
};

/* ---------- Content (English + Arabic) ---------- */

const COPY = {
  en: {
    langButton: "العربية",
    langLabel: "Switch to Arabic",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    navLabel: "Main navigation",
    skip: "Skip to content",
    brand: "Care & Share",
    brandSub: "Nursery, Khalifa City",
    enquire: "Enquire now",
    nav: { home: "Home", about: "About", programs: "Programs", gallery: "Gallery", admissions: "Admissions", contact: "Contact" },
    hero: {
      tag: "Daycare and nursery in Khalifa City",
      titleLead: "Where little hearts learn to ",
      titleHi: "care and share",
      titleEnd: "",
      text: "Care & Share Nursery is a friendly daycare and nursery in Khalifa City, Abu Dhabi, where attentive teachers help children learn, play and make sweet friendships.",
      primary: "Enquire now",
      secondary: "Book a visit",
      open: "Opens at 7:00 am",
      stickerTitle: "19 parent reviews",
      stickerSub: "on Google Maps",
      stageLabel: "A heart surrounded by a circle of smiling children",
    },
    trust: [
      { icon: "smile", title: "Attentive, friendly staff", text: "Parents describe the team as nice and very attentive." },
      { icon: "heart", title: "Sweet friendships", text: "Children learn to play together and make real friends." },
      { icon: "book", title: "A diverse curriculum", text: "A varied mix of activities that keeps learning fresh." },
      { icon: "sun", title: "Care from the early months", text: "A warm daycare for our youngest, with a smooth path on to KG." },
    ],
    about: {
      title: "Caring and sharing, every single day",
      text1:
        "Kindness is the first lesson at Care & Share. Every day is planned so children feel safe and cared for first, then learn to share, take turns and make friends.",
      text2:
        "Our teachers stay close to every child and every family, so you always know how your child's day went.",
      safetyTitle: "Safety and care you can count on",
      safety: [
        "Supervised drop-off and pick-up every day",
        "Classrooms cleaned and sanitised daily",
        "Child-safe furniture, floors and play equipment",
        "Health and emergency details recorded for every child",
        "Regular updates for parents",
      ],
      areasTitle: "What children learn",
      areas: [
        { icon: "heart", title: "Friendship and sharing", text: "Taking turns, kind words and working together become second nature." },
        { icon: "sun", title: "Play and movement", text: "Indoor and outdoor play builds balance, coordination and confidence." },
        { icon: "book", title: "Language and stories", text: "Stories, rhymes and conversation grow early speaking and listening." },
        { icon: "pencil", title: "Creativity", text: "Painting, crafts and role play give every child a way to express themselves." },
      ],
    },
    programs: {
      title: "From first steps to KG-ready",
      text: "Choose a program to see what the days look like.",
      tabsLabel: "Programs",
      focusTitle: "Focus areas",
      groups: [
        {
          name: "Daycare",
          age: "Babies and toddlers, 6 months to 2 years",
          text: "Gentle routines, cuddles and sensory play help our youngest children feel secure while parents are at work.",
          focus: ["Comfort and routine", "Sensory play", "First words and songs"],
        },
        {
          name: "Nursery",
          age: "2 to 3 years",
          text: "Hands-on activities, stories and play build language, independence and first friendships.",
          focus: ["Early language", "Sharing and turn-taking", "Self-help skills"],
        },
        {
          name: "KG Ready",
          age: "3 to 4 years",
          text: "Letters, numbers and teamwork prepare children, step by step, for a confident start in KG.",
          focus: ["Letters and numbers", "Listening and focus", "Teamwork"],
        },
      ],
      dayTitle: "A day at Care & Share",
      dayNote: "Sample schedule. Final times are confirmed at enrolment.",
      day: [
        { time: "7:00 am", label: "Welcome and free play" },
        { time: "8:30 am", label: "Breakfast and hand washing" },
        { time: "9:30 am", label: "Circle time and learning" },
        { time: "11:00 am", label: "Outdoor play" },
        { time: "12:00 pm", label: "Lunch and rest" },
        { time: "2:00 pm", label: "Art, crafts and pick-up" },
      ],
    },
    gallery: {
      title: "Life at Care & Share",
      text: "A look at our classrooms and play areas.",
      filtersLabel: "Filter photos",
      filters: { all: "All", rooms: "Classrooms", outdoor: "Play areas", activities: "Activities" },
      tiles: ["Bright classroom", "Story corner", "Baby room", "Play area", "Climbing and slides", "Art time", "Sharing circle", "Snack table"],
    },
    reviews: {
      title: "What parents say",
      text: "Real words from parents on Google Maps.",
      ratingLabel: "3.9 out of 5",
      count: "19 reviews",
      tagsTitle: "What parents mention most",
      tags: [
        { label: "Management", count: 4 },
        { label: "Staff", count: 2 },
        { label: "Daycare", count: 2 },
      ],
      source: "Google review",
      link: "Read all reviews on Google",
    },
    admissions: {
      title: "Joining Care & Share",
      text: "Three simple steps from first hello to first day.",
      steps: [
        { title: "Send an enquiry", text: "Fill in the short form or message us on WhatsApp." },
        { title: "Visit the nursery", text: "Meet the teachers, see the classrooms and ask anything." },
        { title: "Welcome your child", text: "We guide you through registration, and your child settles in gently." },
      ],
    },
    contact: {
      title: "Visit us or send an enquiry",
      addressLabel: "Address",
      address: "10 Al Ayk Street, Khalifa City, SE4, Abu Dhabi, United Arab Emirates",
      hoursLabel: "Opening hours",
      hours: "Monday to Friday, from 7:00 am",
      phoneLabel: "Phone",
      call: "Call now",
      whatsapp: "WhatsApp",
      directions: "Get directions",
      mapTitle: "Map showing Care & Share Nursery in Khalifa City, Abu Dhabi",
      form: {
        title: "Enquiry form",
        name: "Parent's name",
        phone: "Phone or WhatsApp",
        age: "Child's age",
        visit: "Preferred visit day",
        message: "Anything you'd like to ask?",
        submit: "Send enquiry",
        errName: "Please enter your name.",
        errPhone: "Please enter a valid phone number.",
        ages: ["6 to 12 months", "1 to 2 years", "2 to 3 years", "3 to 4 years"],
        days: ["Any day", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        thanks: (n) => `Thank you, ${n}`,
        thanksText: "We've received your enquiry and will reply as soon as we can.",
        waSend: "Send these details on WhatsApp",
        again: "Send another enquiry",
        waTemplate: (n, a, d, m) => `Hello Care & Share Nursery, I'm ${n}. My child is ${a}. Preferred visit: ${d}.${m ? " " + m : ""}`,
      },
    },
    footer: { rights: "© 2026 Care & Share Nursery. All rights reserved." },
    bar: { call: "Call", whatsapp: "WhatsApp", enquire: "Enquire" },
  },

  ar: {
    langButton: "English",
    langLabel: "التبديل إلى الإنجليزية",
    menuOpen: "فتح القائمة",
    menuClose: "إغلاق القائمة",
    navLabel: "التنقل الرئيسي",
    skip: "انتقل إلى المحتوى",
    brand: "كير أند شير",
    brandSub: "حضانة، مدينة خليفة",
    enquire: "استفسر الآن",
    nav: { home: "الرئيسية", about: "من نحن", programs: "البرامج", gallery: "المعرض", admissions: "التسجيل", contact: "تواصل معنا" },
    hero: {
      tag: "دار حضانة وحضانة في مدينة خليفة",
      titleLead: "حيث تتعلم القلوب الصغيرة أن ",
      titleHi: "تهتم وتشارك",
      titleEnd: "",
      text: "حضانة كير أند شير دار حضانة ودودة في مدينة خليفة بأبوظبي، تساعد فيها معلمات منتبهات الأطفال على التعلم واللعب وتكوين صداقات جميلة.",
      primary: "استفسر الآن",
      secondary: "احجز زيارة",
      open: "تفتح الساعة 7:00 صباحًا",
      stickerTitle: "19 تقييمًا من أولياء الأمور",
      stickerSub: "على خرائط جوجل",
      stageLabel: "قلب تحيط به دائرة من الأطفال المبتسمين",
    },
    trust: [
      { icon: "smile", title: "طاقم منتبه وودود", text: "يصف أولياء الأمور الفريق بأنه لطيف ومنتبه جدًا." },
      { icon: "heart", title: "صداقات جميلة", text: "يتعلم الأطفال اللعب معًا وتكوين صداقات حقيقية." },
      { icon: "book", title: "منهج متنوع", text: "مزيج متنوع من الأنشطة يبقي التعلم ممتعًا ومتجددًا." },
      { icon: "sun", title: "رعاية من الأشهر الأولى", text: "دار حضانة دافئة لأصغر أطفالنا، مع انتقال سلس إلى الروضة." },
    ],
    about: {
      title: "نهتم ونشارك، كل يوم",
      text1:
        "اللطف هو الدرس الأول في كير أند شير. نخطط كل يوم ليشعر الأطفال بالأمان والرعاية أولًا، ثم يتعلموا المشاركة وانتظار الدور وتكوين الصداقات.",
      text2:
        "تبقى معلماتنا قريبات من كل طفل ومن كل أسرة، لتعرفوا دائمًا كيف قضى طفلكم يومه.",
      safetyTitle: "أمان ورعاية تطمئن إليهما",
      safety: [
        "إشراف على التسليم والاستلام كل يوم",
        "غرف تُنظَّف وتُعقَّم يوميًا",
        "أثاث وأرضيات ومعدات لعب مناسبة للأطفال",
        "تسجيل المعلومات الصحية وجهات الطوارئ لكل طفل",
        "تحديثات منتظمة لأولياء الأمور",
      ],
      areasTitle: "ماذا يتعلم الأطفال",
      areas: [
        { icon: "heart", title: "الصداقة والمشاركة", text: "انتظار الدور والكلمات اللطيفة والعمل معًا تصبح عادة طبيعية." },
        { icon: "sun", title: "اللعب والحركة", text: "اللعب داخل الصف وخارجه ينمّي التوازن والتناسق والثقة بالنفس." },
        { icon: "book", title: "اللغة والقصص", text: "القصص والأناشيد والحوار تنمّي مهارات التحدث والاستماع المبكرة." },
        { icon: "pencil", title: "الإبداع", text: "الرسم والأشغال اليدوية والتمثيل تمنح كل طفل وسيلة للتعبير عن نفسه." },
      ],
    },
    programs: {
      title: "من الخطوات الأولى إلى الاستعداد للروضة",
      text: "اختر البرنامج لترى كيف تبدو الأيام.",
      tabsLabel: "البرامج",
      focusTitle: "محاور التركيز",
      groups: [
        {
          name: "دار الحضانة",
          age: "الرضّع والصغار، من 6 أشهر إلى سنتين",
          text: "روتين لطيف وأحضان ولعب حسي تساعد أصغر أطفالنا على الشعور بالأمان أثناء عمل الأهل.",
          focus: ["الراحة والروتين", "اللعب الحسي", "الكلمات والأناشيد الأولى"],
        },
        {
          name: "الحضانة",
          age: "من سنتين إلى 3 سنوات",
          text: "أنشطة عملية وقصص ولعب تبني اللغة والاستقلالية وأولى الصداقات.",
          focus: ["اللغة المبكرة", "المشاركة وانتظار الدور", "الاعتماد على النفس"],
        },
        {
          name: "الاستعداد للروضة",
          age: "من 3 إلى 4 سنوات",
          text: "الحروف والأرقام والعمل الجماعي تُعِدّ الأطفال خطوة بخطوة لبداية واثقة في الروضة.",
          focus: ["الحروف والأرقام", "الإصغاء والتركيز", "العمل الجماعي"],
        },
      ],
      dayTitle: "يوم في كير أند شير",
      dayNote: "جدول تجريبي. تُؤكَّد المواعيد النهائية عند التسجيل.",
      day: [
        { time: "7:00 ص", label: "الاستقبال واللعب الحر" },
        { time: "8:30 ص", label: "الإفطار وغسل اليدين" },
        { time: "9:30 ص", label: "حلقة الحوار والتعلم" },
        { time: "11:00 ص", label: "اللعب في الخارج" },
        { time: "12:00 م", label: "الغداء والراحة" },
        { time: "2:00 م", label: "الفنون والأشغال اليدوية والانصراف" },
      ],
    },
    gallery: {
      title: "الحياة في كير أند شير",
      text: "لمحة عن صفوفنا وأماكن اللعب.",
      filtersLabel: "تصفية الصور",
      filters: { all: "الكل", rooms: "الصفوف", outdoor: "أماكن اللعب", activities: "الأنشطة" },
      tiles: ["صف مشرق", "ركن القصص", "غرفة الصغار", "منطقة اللعب", "الزحاليق والتسلق", "وقت الفن", "حلقة المشاركة", "طاولة الوجبات"],
    },
    reviews: {
      title: "ماذا يقول أولياء الأمور",
      text: "كلمات حقيقية من أولياء الأمور على خرائط جوجل، بلغتها الأصلية.",
      ratingLabel: "3.9 من 5",
      count: "19 تقييمًا",
      tagsTitle: "أكثر ما يذكره أولياء الأمور",
      tags: [
        { label: "الإدارة", count: 4 },
        { label: "الكادر", count: 2 },
        { label: "دار الحضانة", count: 2 },
      ],
      source: "تقييم على جوجل",
      link: "اقرأ جميع التقييمات على جوجل",
    },
    admissions: {
      title: "الانضمام إلى كير أند شير",
      text: "ثلاث خطوات بسيطة من أول تواصل إلى أول يوم.",
      steps: [
        { title: "أرسل استفسارك", text: "املأ النموذج القصير أو راسلنا على واتساب." },
        { title: "زُر الحضانة", text: "تعرّف على المعلمات وشاهد الصفوف واسأل عن أي شيء." },
        { title: "رحّب بطفلك", text: "نرافقك في التسجيل، ويتأقلم طفلك بهدوء وتدرّج." },
      ],
    },
    contact: {
      title: "زرنا أو أرسل استفسارك",
      addressLabel: "العنوان",
      address: "10 شارع الأيك، مدينة خليفة، SE4، أبوظبي، الإمارات العربية المتحدة",
      hoursLabel: "ساعات العمل",
      hours: "من الاثنين إلى الجمعة، ابتداءً من 7:00 صباحًا",
      phoneLabel: "الهاتف",
      call: "اتصل الآن",
      whatsapp: "واتساب",
      directions: "الاتجاهات",
      mapTitle: "خريطة تعرض موقع حضانة كير أند شير في مدينة خليفة بأبوظبي",
      form: {
        title: "نموذج الاستفسار",
        name: "اسم ولي الأمر",
        phone: "رقم الهاتف أو واتساب",
        age: "عمر الطفل",
        visit: "يوم الزيارة المفضل",
        message: "هل لديك سؤال؟",
        submit: "إرسال الاستفسار",
        errName: "الرجاء إدخال اسمك.",
        errPhone: "الرجاء إدخال رقم هاتف صحيح.",
        ages: ["من 6 إلى 12 شهرًا", "من سنة إلى سنتين", "من سنتين إلى 3 سنوات", "من 3 إلى 4 سنوات"],
        days: ["أي يوم", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة"],
        thanks: (n) => `شكرًا ${n}`,
        thanksText: "استلمنا استفسارك وسنرد عليك في أقرب وقت.",
        waSend: "أرسل هذه التفاصيل عبر واتساب",
        again: "إرسال استفسار آخر",
        waTemplate: (n, a, d, m) => `مرحبًا حضانة كير أند شير، أنا ${n}. عمر طفلي ${a}. يوم الزيارة المفضل: ${d}.${m ? " " + m : ""}`,
      },
    },
    footer: { rights: "© 2026 حضانة كير أند شير. جميع الحقوق محفوظة." },
    bar: { call: "اتصال", whatsapp: "واتساب", enquire: "استفسار" },
  },
};

/* ---------- Static data ---------- */

// Real parent reviews from Google Maps, kept in their original language.
// Rima's review is shown up to "Diverse curriculum." The original also
// has a closing sentence about the decor; confirm with the nursery which
// reviews they are happy to feature.
const REVIEWS = [
  {
    name: "Mahra",
    initial: "M",
    tone: "coral",
    meta: { en: "5 months ago", ar: "قبل 5 أشهر" },
    text: "It’s so good and the people who work there are nice my sister is so happy and she made really sweet friends🤍",
  },
  {
    name: "Rima Alsayari",
    initial: "R",
    tone: "teal",
    meta: { en: "Local Guide · 6 years ago", ar: "مرشد محلي · قبل 6 سنوات" },
    text: "Very good nursery. My son has been with them since age of 6 m and he is about to graduate to KG soon. Very attentive staff. Diverse curriculum.",
  },
];

// Gallery: order matches COPY.*.gallery.tiles. Add `src: "/photos/xyz.jpg"`
// to replace the artwork with a real photo.
const TILES = [
  { cat: "rooms", variant: "peach", size: "wide", src: "" },
  { cat: "rooms", variant: "sun", size: "", src: "" },
  { cat: "rooms", variant: "teal", size: "tall", src: "" },
  { cat: "outdoor", variant: "rose", size: "", src: "" },
  { cat: "outdoor", variant: "lilac", size: "wide", src: "" },
  { cat: "activities", variant: "sun", size: "", src: "" },
  { cat: "activities", variant: "peach", size: "tall", src: "" },
  { cat: "activities", variant: "teal", size: "", src: "" },
];

const PROGRAM_COLORS = ["#FFD3C2", "#BFEBE3", "#FFE9A8"];
const DOT_COLORS = ["#FF9E80", "#FFB3C7", "#FFD166", "#4CC9B8", "#8EC9F2", "#B9A9F5"];
const STEP_COLORS = ["#FF9E80", "#FFD166", "#4CC9B8"];

// The circle of friends in the hero: x, y inside a 400 x 350 canvas
const FRIENDS = [
  { x: 200, y: 44, fill: "#FFD166" },
  { x: 332, y: 112, fill: "#9ADFC4" },
  { x: 332, y: 238, fill: "#F7B0C8" },
  { x: 200, y: 304, fill: "#9ACBF2" },
  { x: 68, y: 238, fill: "#FFB199" },
  { x: 68, y: 112, fill: "#C3B6F7" },
];

/* ---------- Icons (inline SVG, no dependency) ---------- */

const ICONS = {
  star: <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />,
  smile: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <path d="M9 9h.01M15 9h.01" />
    </>
  ),
  heart: <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />,
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </>
  ),
  sparkle: (
    <>
      <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3z" />
      <path d="M19 15v4M17 17h4" />
    </>
  ),
  book: (
    <>
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </>
  ),
  pencil: (
    <>
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </>
  ),
  phone: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />,
  pin: (
    <>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </>
  ),
  menu: <path d="M3 6h18M3 12h18M3 18h18" />,
  close: <path d="M18 6L6 18M6 6l12 12" />,
  check: <path d="M20 6L9 17l-5-5" />,
  whatsapp: (
    <>
      <path d="M3 21l1.65-4.9A9 9 0 1 1 8 19.35L3 21z" />
      <path d="M9 9.5c.3 2.2 2.3 4.2 4.5 4.5l1.2-1.3-1.7-1-.9.7a3.5 3.5 0 0 1-1.6-1.6l.7-.9-1-1.7L9 9.5z" />
    </>
  ),
  send: (
    <>
      <path d="M22 2L11 13" />
      <path d="M22 2l-7 20-4-9-9-4 20-7z" />
    </>
  ),
};

function Icon({ name, size = 22, className = "" }) {
  return (
    <svg className={`icon ${className}`} viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {ICONS[name]}
    </svg>
  );
}

/* Each star is its own box: a pale star behind, a colored star on top
   clipped to the fraction that should be filled. A 3.9 rating shows
   three full stars and a clean partial fourth, with no smudging. */
function Stars({ value = 5, label }) {
  return (
    <span className="stars" role="img" aria-label={label}>
      {[0, 1, 2, 3, 4].map((i) => {
        const frac = Math.max(0, Math.min(1, value - i)) * 100;
        return (
          <span className="star" key={i} style={{ "--fill": `${frac}%` }}>
            <Icon name="star" size={18} className="star__base icon--fill" />
            <Icon name="star" size={18} className="star__fill icon--fill" />
          </span>
        );
      })}
    </span>
  );
}

/* A smiling child: a colored circle with two eyes and a smile */
function Face({ fill }) {
  return (
    <g>
      <circle r="36" fill={fill} />
      <circle cx="-12" cy="-6" r="4" fill="#3b2a55" />
      <circle cx="12" cy="-6" r="4" fill="#3b2a55" />
      <path d="M-14 8 Q0 24 14 8" fill="none" stroke="#3b2a55" strokeWidth="4" strokeLinecap="round" />
      <circle cx="-22" cy="8" r="5" fill="#ff6f91" opacity="0.35" />
      <circle cx="22" cy="8" r="5" fill="#ff6f91" opacity="0.35" />
    </g>
  );
}

/* The signature moment: a heart in the middle of a circle of friends.
   The friends pop in one by one, then bob gently; the heart beats. */
function FriendsArt() {
  return (
    <svg className="friends" viewBox="0 0 400 350" aria-hidden="true">
      <ellipse className="orbit" cx="200" cy="175" rx="132" ry="128" fill="none" stroke="#ffb3c7" strokeWidth="3" strokeDasharray="2 10" strokeLinecap="round" />
      <path
        className="heart"
        d="M200 250 C 88 176, 112 88, 172 98 C 192 102, 200 118, 200 126 C 200 118, 208 102, 228 98 C 288 88, 312 176, 200 250 Z"
        fill="#ff9e80"
      />
      <path d="M150 128 C 140 136, 138 150, 146 160" fill="none" stroke="#fff" strokeWidth="6" strokeLinecap="round" opacity="0.55" />
      {FRIENDS.map((f, i) => (
        <g key={i} transform={`translate(${f.x} ${f.y})`}>
          <g className="friend" style={{ "--i": i }}>
            <g className="friend__bob" style={{ "--i": i }}>
              <Face fill={f.fill} />
            </g>
          </g>
        </g>
      ))}
    </svg>
  );
}

/* ---------- Header ---------- */

function Header({ c, lang, setLang, active, menuOpen, setMenuOpen, scrolled }) {
  const items = ["home", "about", "programs", "gallery", "admissions", "contact"];
  return (
    <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
      <div className="wrap header__bar">
        <a className="logo" href="#home" onClick={() => setMenuOpen(false)}>
          <span className="logo__mark" aria-hidden="true">
            <Icon name="heart" size={22} className="icon--fill" />
          </span>
          <span className="logo__text">
            <strong>{c.brand}</strong>
            <small>{c.brandSub}</small>
          </span>
        </a>

        <nav id="main-nav" className={`nav ${menuOpen ? "nav--open" : ""}`} aria-label={c.navLabel}>
          {items.map((id) => (
            <a key={id} href={`#${id}`} aria-current={active === id ? "true" : undefined} onClick={() => setMenuOpen(false)}>
              {c.nav[id]}
            </a>
          ))}
        </nav>

        <div className="header__actions">
          <button type="button" className="lang" onClick={() => setLang(lang === "en" ? "ar" : "en")} aria-label={c.langLabel} lang={lang === "en" ? "ar" : "en"}>
            {c.langButton}
          </button>
          <a className="btn btn--sun btn--sm header__cta" href="#contact">
            {c.enquire}
          </a>
          <button type="button" className="burger" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="main-nav" aria-label={menuOpen ? c.menuClose : c.menuOpen}>
            <Icon name={menuOpen ? "close" : "menu"} />
          </button>
        </div>
      </div>
    </header>
  );
}

/* ---------- Hero ---------- */

function Hero({ c }) {
  return (
    <section id="home" className="band band--peach hero">
      <div className="wrap hero__grid">
        <div className="hero__copy">
          <p className="hero__tag">
            <Icon name="sparkle" size={16} />
            {c.hero.tag}
          </p>
          <h1>
            {c.hero.titleLead}
            <span className="hl">{c.hero.titleHi}</span>
            {c.hero.titleEnd}
          </h1>
          <p className="lead">{c.hero.text}</p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="#contact">{c.hero.primary}</a>
            <a className="btn btn--ghost" href="#contact">{c.hero.secondary}</a>
          </div>
          <p className="hero__open">
            <Icon name="clock" size={18} />
            {c.hero.open}
          </p>
        </div>

        <div className="stage-wrap">
          <div className="stage" role="img" aria-label={c.hero.stageLabel}>
            <FriendsArt />
            <span className="dot dot--1" aria-hidden="true" />
            <span className="dot dot--2" aria-hidden="true" />
            <span className="dot dot--3" aria-hidden="true" />
          </div>
          <div className="sticker">
            <span className="sticker__heart"><Icon name="heart" size={20} className="icon--fill" /></span>
            <div>
              <strong>{c.hero.stickerTitle}</strong>
              <span>{c.hero.stickerSub}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Trust strip ---------- */

function Trust({ c }) {
  return (
    <section className="trust" aria-label={c.brand}>
      <ul className="wrap trust__list">
        {c.trust.map((t, i) => (
          <li key={t.title} className={`trust__item trust__item--${i}`}>
            <span className="trust__icon"><Icon name={t.icon} size={24} /></span>
            <div>
              <h3>{t.title}</h3>
              <p>{t.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ---------- About & Curriculum ---------- */

function About({ c }) {
  const a = c.about;
  return (
    <section id="about" className="section">
      <div className="wrap about__grid">
        <div className="about__copy">
          <h2>{a.title}</h2>
          <p className="lead">{a.text1}</p>
          <p>{a.text2}</p>
        </div>
        <aside className="safety">
          <h3>{a.safetyTitle}</h3>
          <ul>
            {a.safety.map((s) => (
              <li key={s}>
                <span className="safety__tick"><Icon name="check" size={16} /></span>
                {s}
              </li>
            ))}
          </ul>
        </aside>
      </div>

      <div className="wrap">
        <h3 className="subhead">{a.areasTitle}</h3>
        <ul className="areas">
          {a.areas.map((x, i) => (
            <li key={x.title} className={`area area--${i}`}>
              <Icon name={x.icon} size={26} />
              <h4>{x.title}</h4>
              <p>{x.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------- Programs ---------- */

function Programs({ c, lang }) {
  const p = c.programs;
  const [tab, setTab] = useState(0);
  const g = p.groups[tab];
  const n = p.groups.length;

  function onKeyDown(e) {
    const rtl = lang === "ar";
    let d = 0;
    if (e.key === "ArrowRight") d = rtl ? -1 : 1;
    if (e.key === "ArrowLeft") d = rtl ? 1 : -1;
    if (!d) return;
    e.preventDefault();
    const next = (tab + d + n) % n;
    setTab(next);
    const el = document.getElementById(`tab-${next}`);
    if (el) el.focus();
  }

  return (
    <section id="programs" className="band band--sun section">
      <div className="wrap">
        <header className="section__head">
          <h2>{p.title}</h2>
          <p>{p.text}</p>
        </header>

        <div className="tabs" role="tablist" aria-label={p.tabsLabel} onKeyDown={onKeyDown}>
          {p.groups.map((x, i) => (
            <button key={x.name} id={`tab-${i}`} type="button" role="tab" className="tab" aria-selected={tab === i} aria-controls="program-panel" tabIndex={tab === i ? 0 : -1} style={{ "--tab": PROGRAM_COLORS[i] }} onClick={() => setTab(i)}>
              <strong>{x.name}</strong>
              <span>{x.age}</span>
            </button>
          ))}
        </div>

        <div id="program-panel" role="tabpanel" aria-labelledby={`tab-${tab}`} className="program" style={{ "--tab": PROGRAM_COLORS[tab] }}>
          <div>
            <p className="program__age">{g.age}</p>
            <h3>{g.name}</h3>
            <p>{g.text}</p>
          </div>
          <div>
            <h4>{p.focusTitle}</h4>
            <ul className="focus">
              {g.focus.map((f) => (
                <li key={f}>
                  <Icon name="check" size={16} />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="dayblock">
          <h3>{p.dayTitle}</h3>
          <ol className="day">
            {p.day.map((d, i) => (
              <li key={d.time} style={{ "--dot": DOT_COLORS[i] }}>
                <time>{d.time}</time>
                <span>{d.label}</span>
              </li>
            ))}
          </ol>
          <p className="note">{p.dayNote}</p>
        </div>
      </div>
    </section>
  );
}

/* ---------- Gallery ---------- */

function Gallery({ c }) {
  const g = c.gallery;
  const [filter, setFilter] = useState("all");
  const visible = TILES.map((t, i) => ({ ...t, label: g.tiles[i] })).filter((t) => filter === "all" || t.cat === filter);

  return (
    <section id="gallery" className="section">
      <div className="wrap">
        <header className="section__head section__head--row">
          <div>
            <h2>{g.title}</h2>
            <p>{g.text}</p>
          </div>
          <div className="chips" role="group" aria-label={g.filtersLabel}>
            {Object.keys(g.filters).map((k) => (
              <button key={k} type="button" className="chip" aria-pressed={filter === k} onClick={() => setFilter(k)}>
                {g.filters[k]}
              </button>
            ))}
          </div>
        </header>

        <div className="mosaic">
          {visible.map((t) => (
            <figure key={t.label} className={`tile tile--${t.variant} ${t.size ? `tile--${t.size}` : ""} ${t.src ? "tile--photo" : ""}`}>
              {t.src && <img src={t.src} alt={t.label} loading="lazy" />}
              <figcaption>{t.label}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Reviews ---------- */

function Reviews({ c, lang }) {
  const r = c.reviews;
  return (
    <section id="reviews" className="band band--indigo section">
      <div className="wrap reviews__grid">
        <div className="reviews__intro">
          <h2>{r.title}</h2>
          <p>{r.text}</p>

          <div className="score">
            <span className="score__num">3.9</span>
            <div>
              <Stars value={3.9} label={r.ratingLabel} />
              <span className="score__count">{r.count}</span>
            </div>
          </div>

          <h3 className="tags__title">{r.tagsTitle}</h3>
          <ul className="tags">
            {r.tags.map((t) => (
              <li key={t.label}>
                {t.label}
                <b>{t.count}</b>
              </li>
            ))}
          </ul>

          <a className="textlink" href={CONTACT.mapLink} target="_blank" rel="noreferrer">
            {r.link}
          </a>
        </div>

        <div className="bubbles">
          {REVIEWS.map((x, i) => (
            <figure className={`bubble bubble--${i}`} key={x.name}>
              <blockquote lang="en" dir="ltr">{x.text}</blockquote>
              <figcaption>
                <span className={`avatar avatar--${x.tone}`} aria-hidden="true">{x.initial}</span>
                <span>
                  <strong>{x.name}</strong>
                  <small>{r.source} · {x.meta[lang]}</small>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Admissions ---------- */

function Admissions({ c }) {
  const a = c.admissions;
  return (
    <section id="admissions" className="band band--teal section">
      <div className="wrap">
        <header className="section__head">
          <h2>{a.title}</h2>
          <p>{a.text}</p>
        </header>

        <ol className="steps">
          {a.steps.map((s, i) => (
            <li key={s.title} style={{ "--step": STEP_COLORS[i] }}>
              <span className="steps__num">{i + 1}</span>
              <div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------- Contact ---------- */

function Contact({ c }) {
  const k = c.contact;
  const f = k.form;
  const [form, setForm] = useState({ name: "", phone: "", age: 0, visit: 0, message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const set = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  function onSubmit(e) {
    e.preventDefault();
    const next = {};
    if (!form.name.trim()) next.name = true;
    if (!/^[+\d][\d\s-]{6,}$/.test(form.phone.trim())) next.phone = true;
    setErrors(next);
    if (Object.keys(next).length === 0) {
      // TODO: send `form` to your backend / Formspree / EmailJS here.
      setSent(true);
    }
  }

  const waHref = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(f.waTemplate(form.name, f.ages[form.age], f.days[form.visit], form.message.trim()))}`;

  return (
    <section id="contact" className="band band--rose section">
      <div className="wrap">
        <header className="section__head">
          <h2>{k.title}</h2>
        </header>

        <div className="contact__grid">
          <div className="contact__info">
            <ul className="facts">
              <li>
                <span className="facts__icon"><Icon name="pin" size={22} /></span>
                <div>
                  <h3>{k.addressLabel}</h3>
                  <p>{k.address}</p>
                  <p className="pluscode" dir="ltr">CH6C+4P Abu Dhabi</p>
                </div>
              </li>
              <li>
                <span className="facts__icon"><Icon name="clock" size={22} /></span>
                <div>
                  <h3>{k.hoursLabel}</h3>
                  <p>{k.hours}</p>
                </div>
              </li>
              <li>
                <span className="facts__icon"><Icon name="phone" size={22} /></span>
                <div>
                  <h3>{k.phoneLabel}</h3>
                  <p dir="ltr" className="phone">{CONTACT.phoneDisplay}</p>
                </div>
              </li>
            </ul>

            <div className="contact__actions">
              <a className="btn btn--primary" href={`tel:${CONTACT.phoneTel}`}>
                <Icon name="phone" size={18} />
                {k.call}
              </a>
              <a className="btn btn--wa" href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noreferrer">
                <Icon name="whatsapp" size={18} />
                {k.whatsapp}
              </a>
              <a className="btn btn--ghost" href={CONTACT.mapLink} target="_blank" rel="noreferrer">
                <Icon name="pin" size={18} />
                {k.directions}
              </a>
            </div>
          </div>

          <div className="formcard">
            {sent ? (
              <div className="sent" role="status">
                <span className="sent__icon"><Icon name="check" size={30} /></span>
                <h3>{f.thanks(form.name.trim())}</h3>
                <p>{f.thanksText}</p>
                <a className="btn btn--wa" href={waHref} target="_blank" rel="noreferrer">
                  <Icon name="whatsapp" size={18} />
                  {f.waSend}
                </a>
                <button type="button" className="textlink textlink--dark" onClick={() => setSent(false)}>
                  {f.again}
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate>
                <h3>{f.title}</h3>

                <div className="field">
                  <label htmlFor="f-name">{f.name}</label>
                  <input id="f-name" type="text" autoComplete="name" value={form.name} onChange={set("name")} aria-invalid={errors.name ? "true" : undefined} aria-describedby={errors.name ? "f-name-err" : undefined} />
                  {errors.name && <p className="err" id="f-name-err">{f.errName}</p>}
                </div>

                <div className="field">
                  <label htmlFor="f-phone">{f.phone}</label>
                  <input id="f-phone" type="tel" inputMode="tel" autoComplete="tel" dir="ltr" value={form.phone} onChange={set("phone")} placeholder="+971" aria-invalid={errors.phone ? "true" : undefined} aria-describedby={errors.phone ? "f-phone-err" : undefined} />
                  {errors.phone && <p className="err" id="f-phone-err">{f.errPhone}</p>}
                </div>

                <div className="field-row">
                  <div className="field">
                    <label htmlFor="f-age">{f.age}</label>
                    <select id="f-age" value={form.age} onChange={(e) => setForm({ ...form, age: Number(e.target.value) })}>
                      {f.ages.map((a, i) => (
                        <option key={a} value={i}>{a}</option>
                      ))}
                    </select>
                  </div>
                  <div className="field">
                    <label htmlFor="f-visit">{f.visit}</label>
                    <select id="f-visit" value={form.visit} onChange={(e) => setForm({ ...form, visit: Number(e.target.value) })}>
                      {f.days.map((d, i) => (
                        <option key={d} value={i}>{d}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="f-msg">{f.message}</label>
                  <textarea id="f-msg" rows="3" value={form.message} onChange={set("message")} />
                </div>

                <button type="submit" className="btn btn--primary btn--block">
                  <Icon name="send" size={18} />
                  {f.submit}
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="map">
          <iframe title={k.mapTitle} src={CONTACT.mapEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
        </div>
      </div>
    </section>
  );
}

/* ---------- Footer, mobile bar ---------- */

function Footer({ c }) {
  const items = ["home", "about", "programs", "gallery", "admissions", "contact"];
  return (
    <footer className="footer">
      <div className="wrap footer__grid">
        <div>
          <p className="footer__brand">{c.brand}</p>
          <p className="footer__sub">{c.contact.address}</p>
        </div>
        <nav aria-label={c.navLabel} className="footer__nav">
          {items.map((id) => (
            <a key={id} href={`#${id}`}>{c.nav[id]}</a>
          ))}
        </nav>
        <a className="footer__phone" href={`tel:${CONTACT.phoneTel}`} dir="ltr">{CONTACT.phoneDisplay}</a>
      </div>
      <p className="wrap footer__rights">{c.footer.rights}</p>
    </footer>
  );
}

function MobileBar({ c }) {
  return (
    <div className="mbar">
      <a href={`tel:${CONTACT.phoneTel}`}>
        <Icon name="phone" size={20} />
        {c.bar.call}
      </a>
      <a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noreferrer">
        <Icon name="whatsapp" size={20} />
        {c.bar.whatsapp}
      </a>
      <a className="mbar__main" href="#contact">
        <Icon name="send" size={20} />
        {c.bar.enquire}
      </a>
    </div>
  );
}

/* ---------- App ---------- */

export default function App() {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem("cs-lang") === "ar" ? "ar" : "en";
    } catch {
      return "en";
    }
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const c = COPY[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.title = lang === "ar" ? "حضانة كير أند شير | أبوظبي" : "Care & Share Nursery | Khalifa City, Abu Dhabi";
    try {
      localStorage.setItem("cs-lang", lang);
    } catch {
      /* storage unavailable, ignore */
    }
  }, [lang]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = ["home", "about", "programs", "gallery", "reviews", "admissions", "contact"];
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean);
    const io = new IntersectionObserver((entries) => entries.forEach((en) => en.isIntersecting && setActive(en.target.id)), { rootMargin: "-40% 0px -55% 0px" });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <a className="skip" href="#content">{c.skip}</a>
      <Header c={c} lang={lang} setLang={setLang} active={active} menuOpen={menuOpen} setMenuOpen={setMenuOpen} scrolled={scrolled} />
      <main id="content">
        <Hero c={c} />
        <Trust c={c} />
        <About c={c} />
        <Programs c={c} lang={lang} />
        <Gallery c={c} />
        <Reviews c={c} lang={lang} />
        <Admissions c={c} />
        <Contact c={c} />
      </main>
      <Footer c={c} />
      <MobileBar c={c} />
    </>
  );
}