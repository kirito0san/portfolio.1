import { useTranslation } from 'react-i18next'
import { benefits } from '../../data/data'
import SectionHeading from '../ui/SectionHeading'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

function BenefitCard({ benefit, index }) {
    const { i18n } = useTranslation()
    const isAr = i18n.language === 'ar'
    const { ref, isVisible } = useScrollAnimation()

    return (
        <div
            ref={ref}
            style={{ animationDelay: `${index * 80}ms` }}
            className={`group relative bg-slate-900/50 border border-white/5 rounded-2xl p-6 transition-all duration-300 hover:bg-slate-800/60 hover:-translate-y-1 overflow-hidden ${isVisible ? 'animate-fade-up' : 'opacity-0'
                }`}
        >
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-gold-400/10 via-transparent to-brand-500/10" />

            <div className="relative z-10">
                <div className="w-14 h-14 flex items-center justify-center text-2xl bg-gold-400/10 rounded-xl mb-4 group-hover:bg-gold-400/20 transition-colors group-hover:scale-110 duration-300">
                    {benefit.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-gold-400 transition-colors">
                    {isAr ? benefit.title : (benefit.titleEn || benefit.title)}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                    {isAr ? benefit.description : (benefit.descriptionEn || benefit.description)}
                </p>
            </div>
        </div>
    )
}

export default function Benefits() {
    const { t } = useTranslation()

    return (
        <section id="benefits" className="relative py-24 overflow-hidden">
            <div className="absolute top-10 left-0 w-80 h-80 rounded-full bg-gold-400 section-orb-2" style={{ transform: 'translateX(-40%)' }} />
            <div className="absolute bottom-10 right-0 w-96 h-96 rounded-full bg-brand-500 section-orb-1" style={{ transform: 'translateX(50%)' }} />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
                <SectionHeading
                    title={t('benefits.title')}
                    subtitle={t('benefits.subtitle')}
                />
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {benefits.map((benefit, i) => (
                        <BenefitCard key={benefit.id} benefit={benefit} index={i} />
                    ))}
                </div>
            </div>
        </section>
    )
}
