import { useTranslation } from 'react-i18next'
import { testimonials } from '../../data/data'
import SectionHeading from '../ui/SectionHeading'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

function Stars({ count }) {
    return (
        <div className="flex gap-0.5 mb-3">
            {Array.from({ length: 5 }).map((_, i) => (
                <svg
                    key={i}
                    className={`w-4 h-4 ${i < count ? 'text-gold-400' : 'text-slate-600'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.96a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.448a1 1 0 00-.364 1.118l1.287 3.96c.3.922-.755 1.688-1.54 1.118L10 14.347l-3.952 2.684c-.784.57-1.838-.196-1.54-1.118l1.287-3.96a1 1 0 00-.364-1.118L2.063 9.387c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.05 2.927z" />
                </svg>
            ))}
        </div>
    )
}

function TestimonialCard({ item, index }) {
    const { i18n } = useTranslation()
    const isAr = i18n.language === 'ar'
    const { ref, isVisible } = useScrollAnimation()

    return (
        <div
            ref={ref}
            style={{ animationDelay: `${index * 120}ms` }}
            className={`relative bg-slate-900/50 border border-white/5 rounded-2xl p-6 overflow-hidden transition-all duration-300 hover:-translate-y-1 ${isVisible ? 'animate-fade-up' : 'opacity-0'
                }`}
        >
            <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-gold-400/5 via-transparent to-brand-500/5" />

            <div className="relative z-10">
                <svg className="w-8 h-8 mb-3 text-brand-500/20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
                </svg>

                <Stars count={item.rating} />
                <p className="mb-6 text-slate-300 leading-relaxed italic">
                    "{isAr ? item.text : (item.textEn || item.text)}"
                </p>
                <div className="flex items-center gap-3">
                    <img src={item.avatar} alt={item.name} className="w-11 h-11 rounded-full object-cover ring-2 ring-white/10" />
                    <div>
                        <p className="text-sm font-bold text-white">{item.name}</p>
                        <p className="text-xs text-slate-400">
                            {isAr ? item.company : (item.companyEn || item.company)}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function Testimonials() {
    const { t } = useTranslation()

    return (
        <section id="testimonials" className="relative py-24 overflow-hidden">
            <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-brand-500 section-orb-2" style={{ transform: 'translateX(-30%)', top: '20%' }} />
            <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-gold-400 section-orb-1" style={{ transform: 'translateX(40%)' }} />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
                <SectionHeading
                    title={t('testimonials.title')}
                    subtitle={t('testimonials.subtitle')}
                />
                <div className="grid md:grid-cols-3 gap-6">
                    {testimonials.map((item, i) => (
                        <TestimonialCard key={item.id} item={item} index={i} />
                    ))}
                </div>
            </div>
        </section>
    )
}
