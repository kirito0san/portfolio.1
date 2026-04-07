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
        description: 'نبني مواقع وتطبيقات ويب حديثة وسريعة بأحدث التقنيات.',
    },
    {
        id: 2,
        icon: '📱',
        title: 'تطبيقات الجوال',
        description: 'تطبيقات iOS و Android بتجربة مستخدم استثنائية.',
    },
    {
        id: 3,
        icon: '🎨',
        title: 'تصميم UI/UX',
        description: 'تصاميم إبداعية تجمع بين الجمال والوظيفة.',
    },
    {
        id: 4,
        icon: '⚙️',
        title: 'حلول السحابة',
        description: 'بنية تحتية موثوقة وقابلة للتوسع على المنصات السحابية.',
    },
    {
        id: 5,
        icon: '📊',
        title: 'التسويق الرقمي',
        description: 'استراتيجيات تسويقية مدروسة لتعزيز حضورك الرقمي.',
    },
    {
        id: 6,
        icon: '🔒',
        title: 'الأمن السيبراني',
        description: 'حماية بياناتك وأنظمتك من التهديدات الرقمية.',
    },
]

// ── المشاريع ─────────────────────────────────────────────────
export const projects = [
    {
        id: 1,
        title: 'منصة التجارة الإلكترونية',
        category: 'تطوير الويب',
        description: 'منصة تسوق متكاملة بواجهة عصرية ونظام دفع آمن.',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80',
        tags: ['React', 'Node.js', 'MongoDB'],
        link: '#',
    },
    {
        id: 2,
        title: 'تطبيق إدارة المهام',
        category: 'تطبيقات الجوال',
        description: 'تطبيق ذكي لإدارة المشاريع والمهام بتجربة سلسة.',
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80',
        tags: ['Flutter', 'Firebase'],
        link: '#',
    },
    {
        id: 3,
        title: 'هوية بصرية لمطعم',
        category: 'تصميم UI/UX',
        description: 'تصميم هوية بصرية كاملة تعكس طابع المطعم الأصيل.',
        image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80',
        tags: ['Figma', 'Branding'],
        link: '#',
    },
    {
        id: 4,
        title: 'لوحة تحكم إدارية',
        category: 'تطوير الويب',
        description: 'داشبورد تحليلي لمتابعة مؤشرات الأداء في الوقت الفعلي.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
        tags: ['React', 'TypeScript', 'Chart.js'],
        link: '#',
    },
    {
        id: 5,
        title: 'تطبيق الصحة واللياقة',
        category: 'تطبيقات الجوال',
        description: 'تطبيق متكامل لتتبع الأهداف الصحية واليومية.',
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80',
        tags: ['React Native', 'Redux'],
        link: '#',
    },
    {
        id: 6,
        title: 'موقع شركة عقارات',
        category: 'تطوير الويب',
        description: 'موقع احترافي لعرض العقارات مع خريطة تفاعلية.',
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
        company: 'شركة النجاح',
        text: 'فريق رائع، التزموا بالوقت وقدموا عملاً يفوق التوقعات. سنتعامل معهم دائماً.',
        rating: 5,
        avatar: 'https://i.pravatar.cc/150?img=3',
    },
    {
        id: 2,
        name: 'ليلى عمر',
        company: 'مؤسسة الإبداع',
        text: 'خدمة ممتازة واحترافية عالية. المشروع خرج بشكل أجمل مما تخيلت.',
        rating: 5,
        avatar: 'https://i.pravatar.cc/150?img=49',
    },
    {
        id: 3,
        name: 'خالد إبراهيم',
        company: 'متجر الأناقة',
        text: 'الفريق يفهم احتياجاتك ويترجمها إلى واقع رقمي مميز. أنصح بهم بشدة.',
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