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
            className="flex overflow-hidden relative justify-center items-center min-h-screen"
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

            <div className="relative z-10 px-4 mx-auto max-w-5xl text-center sm:px-6">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-brand-500/10 border border-brand-500/20 rounded-full px-4 py-1.5 text-sm text-brand-400 font-medium mb-8 animate-fade-in">
                    <span className="w-2 h-2 rounded-full animate-pulse bg-brand-400" />
                    {t('hero.badge')}
                </div>

                {/* Tagline */}
                <h1 className="mb-6 text-5xl font-extrabold leading-tight text-white md:text-7xl animate-fade-up">
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
                <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-slate-400 md:text-xl animate-fade-up animation-delay-200">
                    {t('hero.description')}
                </p>

                {/* CTAs */}
                <div className="flex flex-wrap gap-4 justify-center items-center animate-fade-up animation-delay-300">
                    <a
                        href="#projects"
                        className="px-8 py-4 font-bold text-white rounded-full shadow-lg transition-all duration-200 bg-brand-500 hover:bg-brand-600 hover:scale-105 shadow-brand-500/30"
                    >
                        {t('hero.cta_primary')}
                    </a>
                    <a
                        href="#contact"
                        className="px-8 py-4 font-semibold text-white rounded-full border transition-all duration-200 bg-white/5 hover:bg-white/10 border-white/10 hover:scale-105"
                    >
                        {t('hero.cta_secondary')}
                    </a>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-6 mt-20 md:grid-cols-4 animate-fade-up animation-delay-400">
                    {stats.map((stat, i) => (
                        <div key={stat.id} className="text-center">
                            <div className="mb-1 text-3xl font-extrabold md:text-4xl text-brand-400">
                                {stat.value}
                            </div>
                            <div className="text-sm text-slate-400">{statLabels[i]}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="flex absolute bottom-8 left-1/2 flex-col gap-2 items-center text-xs animate-bounce -translate-x-1/2 text-slate-500">
                <span>{t('hero.scroll')}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </div>
        </section>
    )
}