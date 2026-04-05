import { useTranslation } from 'react-i18next'
import { services } from '../../data/data'
import SectionHeading from '../ui/SectionHeading'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

function ServiceCard({ service, index }) {
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
                {service.icon}
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
                {isAr ? service.title : (service.titleEn || service.title)}
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
                {isAr ? service.description : (service.descriptionEn || service.description)}
            </p>
        </div>
    )
}

export default function Services() {
    const { t } = useTranslation()

    return (
        <section id="services" className="py-24 bg-slate-900/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <SectionHeading
                    title={t('services.title')}
                    subtitle={t('services.subtitle')}
                />
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, i) => (
                        <ServiceCard key={service.id} service={service} index={i} />
                    ))}
                </div>
            </div>
        </section>
    )
}