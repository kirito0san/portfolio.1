// ============================================================
//  data.js  –  كل بيانات الموقع في مكان واحد
//  غيّر أي قيمة هنا وسيتحدث الموقع تلقائياً
// ============================================================

// ── الهوية ──────────────────────────────────────────────────
export const company = {
    name: 'اسم الشركة',          // ← غيّر الاسم هنا
    tagline: 'نبني مستقبلك الرقمي',
    description: 'شركة متخصصة في تقديم حلول رقمية متكاملة تساعد عملاءنا على النمو والتميز في السوق.',
    email: 'info@company.com',
    phone: '+20 100 000 0000',
    address: 'القاهرة، مصر',
    socialLinks: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        instagram: 'https://instagram.com',
        behance: 'https://behance.net',
    },
}

// ── الخدمات ──────────────────────────────────────────────────
export const services = [
    {
        id: 1,
        icon: '💻',
        title: 'تطوير الويب',
        titleEn: 'Web Development',
        description: 'نبني مواقع وتطبيقات ويب حديثة وسريعة بأحدث التقنيات.',
        descriptionEn: 'We build modern, fast web applications using the latest technologies.',
    },
    {
        id: 2,
        icon: '📱',
        title: 'تطبيقات الجوال',
        titleEn: 'Mobile Apps',
        description: 'تطبيقات iOS و Android بتجربة مستخدم استثنائية.',
        descriptionEn: 'iOS and Android apps with an exceptional user experience.',
    },
    {
        id: 3,
        icon: '🎨',
        title: 'تصميم UI/UX',
        titleEn: 'UI/UX Design',
        description: 'تصاميم إبداعية تجمع بين الجمال والوظيفة.',
        descriptionEn: 'Creative designs that combine beauty and functionality.',
    },
    {
        id: 4,
        icon: '⚙️',
        title: 'حلول السحابة',
        titleEn: 'Cloud Solutions',
        description: 'بنية تحتية موثوقة وقابلة للتوسع على المنصات السحابية.',
        descriptionEn: 'Reliable and scalable infrastructure on cloud platforms.',
    },
    {
        id: 5,
        icon: '📊',
        title: 'التسويق الرقمي',
        titleEn: 'Digital Marketing',
        description: 'استراتيجيات تسويقية مدروسة لتعزيز حضورك الرقمي.',
        descriptionEn: 'Well-researched marketing strategies to boost your digital presence.',
    },
    {
        id: 6,
        icon: '🔒',
        title: 'الأمن السيبراني',
        titleEn: 'Cybersecurity',
        description: 'حماية بياناتك وأنظمتك من التهديدات الرقمية.',
        descriptionEn: 'Protecting your data and systems from digital threats.',
    },
]

// ── المشاريع ─────────────────────────────────────────────────
export const projects = [
    {
        id: 1,
        title: 'منصة التجارة الإلكترونية',
        titleEn: 'E-Commerce Platform',
        category: 'تطوير الويب',
        categoryEn: 'Web Development',
        description: 'منصة تسوق متكاملة بواجهة عصرية ونظام دفع آمن.',
        descriptionEn: 'A complete shopping platform with a modern interface and secure payment.',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80',
        tags: ['React', 'Node.js', 'MongoDB'],
        link: '#',
    },
    {
        id: 2,
        title: 'تطبيق إدارة المهام',
        titleEn: 'Task Management App',
        category: 'تطبيقات الجوال',
        categoryEn: 'Mobile Apps',
        description: 'تطبيق ذكي لإدارة المشاريع والمهام بتجربة سلسة.',
        descriptionEn: 'A smart app for managing projects and tasks with a smooth experience.',
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80',
        tags: ['Flutter', 'Firebase'],
        link: '#',
    },
    {
        id: 3,
        title: 'هوية بصرية لمطعم',
        titleEn: 'Restaurant Branding',
        category: 'تصميم UI/UX',
        categoryEn: 'UI/UX Design',
        description: 'تصميم هوية بصرية كاملة تعكس طابع المطعم الأصيل.',
        descriptionEn: 'Complete visual identity design reflecting the restaurant\'s authentic character.',
        image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80',
        tags: ['Figma', 'Branding'],
        link: '#',
    },
    {
        id: 4,
        title: 'لوحة تحكم إدارية',
        titleEn: 'Admin Dashboard',
        category: 'تطوير الويب',
        categoryEn: 'Web Development',
        description: 'داشبورد تحليلي لمتابعة مؤشرات الأداء في الوقت الفعلي.',
        descriptionEn: 'An analytical dashboard for tracking performance metrics in real-time.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
        tags: ['React', 'TypeScript', 'Chart.js'],
        link: '#',
    },
    {
        id: 5,
        title: 'تطبيق الصحة واللياقة',
        titleEn: 'Health & Fitness App',
        category: 'تطبيقات الجوال',
        categoryEn: 'Mobile Apps',
        description: 'تطبيق متكامل لتتبع الأهداف الصحية واليومية.',
        descriptionEn: 'A comprehensive app for tracking health and daily goals.',
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80',
        tags: ['React Native', 'Redux'],
        link: '#',
    },
    {
        id: 6,
        title: 'موقع شركة عقارات',
        titleEn: 'Real Estate Website',
        category: 'تطوير الويب',
        categoryEn: 'Web Development',
        description: 'موقع احترافي لعرض العقارات مع خريطة تفاعلية.',
        descriptionEn: 'A professional website for showcasing properties with an interactive map.',
        image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80',
        tags: ['Next.js', 'Tailwind', 'Maps API'],
        link: '#',
    },
]

// ── آراء العملاء ─────────────────────────────────────────────
export const testimonials = [
    {
        id: 1,
        name: 'محمد السيد',
        nameEn: 'Mohamed Elsayed',
        company: 'شركة النجاح',
        companyEn: 'Al-Najah Company',
        text: 'فريق رائع، التزموا بالوقت وقدموا عملاً يفوق التوقعات. سنتعامل معهم دائماً.',
        textEn: 'Great team, they stayed on schedule and delivered work that exceeded expectations. We will always work with them.',
        rating: 5,
        avatar: 'https://i.pravatar.cc/150?img=3',
    },
    {
        id: 2,
        name: 'ليلى عمر',
        nameEn: 'Laila Omar',
        company: 'مؤسسة الإبداع',
        companyEn: 'Ibtikar Foundation',
        text: 'خدمة ممتازة واحترافية عالية. المشروع خرج بشكل أجمل مما تخيلت.',
        textEn: 'Excellent service and high professionalism. The project came out even better than I imagined.',
        rating: 5,
        avatar: 'https://i.pravatar.cc/150?img=49',
    },
    {
        id: 3,
        name: 'خالد إبراهيم',
        nameEn: 'Khaled Ibrahim',
        company: 'متجر الأناقة',
        companyEn: 'Al-Anaqa Store',
        text: 'الفريق يفهم احتياجاتك ويترجمها إلى واقع رقمي مميز. أنصح بهم بشدة.',
        textEn: 'The team understands your needs and translates them into a distinctive digital reality. I highly recommend them.',
        rating: 5,
        avatar: 'https://i.pravatar.cc/150?img=7',
    },
]

// ── الإحصائيات ───────────────────────────────────────────────
export const stats = [
    { id: 1, value: '150+', label: 'مشروع منجز' },
    { id: 2, value: '80+', label: 'عميل سعيد' },
    { id: 3, value: '7+', label: 'سنوات خبرة' },
    { id: 4, value: '15+', label: 'جائزة دولية' },
]

// ── ليه تختارنا ──────────────────────────────────────────────
export const benefits = [
    {
        id: 1,
        icon: '🚀',
        title: 'سرعة في التنفيذ',
        titleEn: 'Fast Delivery',
        description: 'نلتزم بالجداول الزمنية ونسلم في الموعد المتفق عليه.',
        descriptionEn: 'We commit to timelines and deliver on the agreed deadline.',
    },
    {
        id: 2,
        icon: '🏆',
        title: 'جودة عالية',
        titleEn: 'High Quality',
        description: 'كود نظيف واختبار شامل يضمن أداء مستقر وتجربة مميزة.',
        descriptionEn: 'Clean code and thorough testing ensure stable performance and great experience.',
    },
    {
        id: 3,
        icon: '🤝',
        title: 'دعم فني متواصل',
        titleEn: 'Ongoing Support',
        description: 'نوفر دعم فني بعد التسليم لمساعدتك في أي وقت.',
        descriptionEn: 'We provide post-delivery support to assist you whenever needed.',
    },
    {
        id: 4,
        icon: '💡',
        title: 'حلول مخصصة',
        titleEn: 'Custom Solutions',
        description: 'كل مشروع فريد ونصممه خصيصاً ليناسب احتياجاتك.',
        descriptionEn: 'Every project is unique and we design it specifically for your needs.',
    },
    {
        id: 5,
        icon: '🔐',
        title: 'أمان البيانات',
        titleEn: 'Data Security',
        description: 'نحمي بياناتك وبيانات عملائك بأحدث تقنيات الحماية.',
        descriptionEn: 'We protect your data and your customers\' with the latest security technologies.',
    },
    {
        id: 6,
        icon: '📈',
        title: 'قابل للتوسع',
        titleEn: 'Scalable',
        description: 'بنية تحتية قوية تنمو مع مشروعك بدون قيود.',
        descriptionEn: 'Strong infrastructure that grows with your project without limitations.',
    },
]

// ── فئات المشاريع (للـ filter) ───────────────────────────────
export const projectCategories = [
    'الكل',
    'تطوير الويب',
    'تطبيقات الجوال',
    'تصميم UI/UX',
]
export const projectCategoriesEn = [
    'الكل',
    'تطوير الويب',
    'تطبيقات الجوال',
    'تصميم UI/UX',
]