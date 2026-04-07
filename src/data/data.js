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
    address: 'مكه , السعوديه',
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

import tg1 from '../assets/tg1.webp'
import tg2 from '../assets/tg2.webp'
import tg3 from '../assets/tg3.webp'
import tg4 from '../assets/tg4.webp'
import tg5 from '../assets/tg5.webp'
import tg6 from '../assets/tg6.webp'
import tg7 from '../assets/tg7.webp'
import tg8 from '../assets/tg8.webp'
import tg9 from '../assets/tg9.webp'
import zr1 from '../assets/zr1.webp'
import zr2 from '../assets/zr2.webp'
import zr3 from '../assets/zr3.webp'
import zr4 from '../assets/zr4.webp'
import zr5 from '../assets/zr5.webp'
import ag1 from '../assets/ag1.webp'
import ag2 from '../assets/ag2.webp'
import ag3 from '../assets/ag3.webp'
import ag4 from '../assets/ag4.webp'

// ── المشاريع ─────────────────────────────────────────────────
export const projects = [
    {
        id: 1,
        title: 'TechGadgets Platform',
        titleEn: 'TechGadgets Platform',
        category: 'تطوير الويب',
        categoryEn: 'Web Development',
        description: 'منصة متجر إلكتروني متقدمة بواجهة حديثة، لوحة تحكم إدارية، وتجربة تسوق متكاملة.',
        descriptionEn: 'Advanced e-commerce platform with modern UI, admin dashboard, and full shopping experience.',
        images: [tg1, tg2, tg3, tg4, tg5, tg6, tg7, tg8, tg9],
        link: 'https://tech-gadgets-plum.vercel.app/',
    },
    {
        id: 2,
        title: 'Agriculture Solutions Website',
        titleEn: 'Agriculture Solutions Website',
        category: 'تطوير الويب',
        categoryEn: 'Web Development',
        description: 'موقع عربي حديث للخدمات الزراعية يتضمن أنظمة ري، شتلات، وإدارة المزارع.',
        descriptionEn: 'Modern Arabic website for agricultural services including irrigation systems, seedlings, and farm management.',
        images: [zr1, zr2, zr3, zr4, zr5],
        link: 'https://thamrat.vercel.app/',
    },
    {
        id: 3,
        title: 'AGN E-commerce Store',
        titleEn: 'AGN E-commerce Store',
        category: 'تطوير الويب',
        categoryEn: 'Web Development',
        description: 'متجر إلكتروني كامل المميزات مع فلتر المنتجات، سلة التسوق، وتصميم متجاوب.',
        descriptionEn: 'Full-featured online store with product filtering, cart system, and responsive design.',
        images: [ag1, ag2, ag3, ag4],
        link: 'https://agnadeenonline.com/',
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
    'All',
    'Web Development',
    'Mobile Apps',
    'UI/UX Design',
]