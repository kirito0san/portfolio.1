import { useTranslation } from 'react-i18next'
import { company, stats } from '../../data/data'

export default function Hero() {
    const { t, i18n } = useTranslation()
    const isAr = i18n.language === 'ar'

    const statLabels = [
        t('stats.projects'),
        t('stats.clients'),
        t('stats.experience'),
        t('stats.awards'),
    ]

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Background */}
            <div className="absolute inset-0 bg-slate-950">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(79,97,251,0.25),transparent)]" />
                <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                        backgroundImage:
                            'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
                        backgroundSize: '60px 60px',
                    }}
                />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-brand-500/10 border border-brand-500/20 rounded-full px-4 py-1.5 text-sm text-brand-400 font-medium mb-8 animate-fade-in">
                    <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse" />
                    {t('hero.badge')}
                </div>

                {/* Tagline */}
                <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6 animate-fade-up">
                    {isAr
                        ? company.tagline.split(' ').map((word, i) => (
                            <span key={i} className={i === 1 ? 'text-brand-400' : ''}>{word} </span>
                        ))
                        : company.taglineEn
                            ? company.taglineEn.split(' ').map((word, i) => (
                                <span key={i} className={i === 1 ? 'text-brand-400' : ''}>{word} </span>
                            ))
                            : company.tagline.split(' ').map((word, i) => (
                                <span key={i} className={i === 1 ? 'text-brand-400' : ''}>{word} </span>
                            ))
                    }
                </h1>

                {/* Description */}
                <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10 animate-fade-up animation-delay-200">
                    {t('hero.description')}
                </p>

                {/* CTAs */}
                <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-up animation-delay-300">
                    <a
                        href="#projects"
                        className="bg-brand-500 hover:bg-brand-600 text-white font-bold px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 shadow-lg shadow-brand-500/30"
                    >
                        {t('hero.cta_primary')}
                    </a>
                    <a
                        href="#contact"
                        className="bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:scale-105"
                    >
                        {t('hero.cta_secondary')}
                    </a>
                </div>

                {/* Stats */}
                <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-up animation-delay-400">
                    {stats.map((stat, i) => (
                        <div key={stat.id} className="text-center">
                            <div className="text-3xl md:text-4xl font-extrabold text-brand-400 mb-1">
                                {stat.value}
                            </div>
                            <div className="text-sm text-slate-400">{statLabels[i]}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 text-xs animate-bounce">
                <span>{t('hero.scroll')}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </div>
        </section>
    )
}