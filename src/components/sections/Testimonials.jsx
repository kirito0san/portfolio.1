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
            className={`bg-slate-900/50 border border-white/5 rounded-2xl p-6 ${isVisible ? 'animate-fade-up' : 'opacity-0'
                }`}
        >
            <Stars count={item.rating} />
            <p className="mb-6 italic leading-relaxed text-slate-300">
                "{isAr ? item.text : (item.textEn || item.text)}"
            </p>
            <div className="flex gap-3 items-center">
                <img src={item.avatar} alt={item.name} className="object-cover w-11 h-11 rounded-full" />
                <div>
                    <p className="text-sm font-bold text-white">{item.name}</p>
                    <p className="text-xs text-slate-400">
                        {isAr ? item.company : (item.companyEn || item.company)}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default function Testimonials() {
    const { t } = useTranslation()

    return (
        <section id="testimonials" className="py-40">
            <div className="px-4 mx-auto max-w-7xl sm:px-6">
                <SectionHeading
                    title={t('testimonials.title')}
                    subtitle={t('testimonials.subtitle')}
                />
                <div className="grid gap-6 md:grid-cols-3">
                    {testimonials.map((item, i) => (
                        <TestimonialCard key={item.id} item={item} index={i} />
                    ))}
                </div>
            </div>
        </section>
    )
}