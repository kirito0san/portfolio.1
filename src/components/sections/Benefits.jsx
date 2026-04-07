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
            className={`group bg-slate-900/50 border border-white/5 hover:border-brand-500/30 rounded-2xl p-6 transition-all duration-300 hover:bg-slate-800/50 hover:-translate-y-1 ${isVisible ? 'animate-fade-up' : 'opacity-0'
                }`}
        >
            <div className="w-12 h-12 flex items-center justify-center text-2xl bg-brand-500/10 rounded-xl mb-4 group-hover:bg-brand-500/20 transition-colors">
                {benefit.icon}
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
                {isAr ? benefit.title : (benefit.titleEn || benefit.title)}
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
                {isAr ? benefit.description : (benefit.descriptionEn || benefit.description)}
            </p>
        </div>
    )
}

export default function Benefits() {
    const { t } = useTranslation()

    return (
        <section id="benefits" className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
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
