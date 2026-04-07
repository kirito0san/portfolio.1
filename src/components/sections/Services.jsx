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
            className={`group relative bg-slate-900/50 border border-white/5 rounded-2xl p-6 transition-all duration-300 hover:bg-slate-800/60 hover:-translate-y-1 overflow-hidden ${isVisible ? 'animate-fade-up' : 'opacity-0'
                }`}
        >
            {/* Gradient border on hover */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-brand-500/20 via-transparent to-gold-400/10" />

            <div className="relative z-10">
                <div className="w-14 h-14 flex items-center justify-center text-2xl bg-brand-500/10 rounded-xl mb-4 group-hover:bg-brand-500/20 transition-colors group-hover:scale-110 duration-300">
                    {service.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-300 transition-colors">
                    {isAr ? service.title : (service.titleEn || service.title)}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                    {isAr ? service.description : (service.descriptionEn || service.description)}
                </p>
            </div>
        </div>
    )
}

export default function Services() {
    const { t } = useTranslation()

    return (
        <section id="services" className="relative py-24 overflow-hidden">
            {/* Background depth orbs */}
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-brand-500 section-orb-1" style={{ transform: 'translateX(50%)', top: '20%' }} />
            <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-purple-500 section-orb-2" style={{ transform: 'translateX(-50%)', bottom: '10%' }} />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
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
