import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { company, stats } from '../../data/data'
import { useCountUp } from '../../hooks/useCountUp'

const heroPhrases = [
    { ar: 'حول أفكارك إلى واقع رقمي مبهر', en: 'Turning Ideas Into Digital Reality' },
    { ar: 'احجز استشارة مجانية وابدأ أول خطوة', en: 'Book a Free Consultation and Take Your First Step' },
    { ar: 'حلول تقنية مبتكرة لنمو أعمالك', en: 'Innovative Tech Solutions For Business Growth' },
    { ar: 'نصمم تجارب رقمية لا تُنسى', en: 'We Design Unforgettable Digital Experiences' },
    { ar: 'شريكك في النجاح الرقمي', en: 'Your Digital Success Partner' },
]

export default function Hero() {
    const { t, i18n } = useTranslation()
    const [phraseIndex, setPhraseIndex] = useState(0)
    const [showStats, setShowStats] = useState(false)

    // Cycle through value propositions
    useEffect(() => {
        const interval = setInterval(() => {
            setPhraseIndex((prev) => (prev + 1) % heroPhrases.length)
        }, 3000)
        return () => clearInterval(interval)
    }, [])

    // Show stats after a short delay for staggered entrance
    useEffect(() => {
        const timer = setTimeout(() => setShowStats(true), 600)
        return () => clearTimeout(timer)
    }, [])

    const isAr = i18n.language === 'ar'
    const currentPhrase = isAr ? heroPhrases[phraseIndex].ar : heroPhrases[phraseIndex].en
    const companyTagline = isAr ? company.tagline : company.taglineEn


    return (
        <section
            id="home"
            className="flex overflow-hidden relative justify-center items-center min-h-screen"
        >
            {/* ── Animated background ── */}
            <div className="absolute inset-0 bg-slate-950">
                {/* Dark base grid */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage:
                            'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
                        backgroundSize: '60px 60px',
                    }}
                />
                {/* Floating orbs */}
                <div className="absolute w-[600px] h-[600px] rounded-full bg-brand-500 float-1" style={{ top: '-10%', left: '-10%', filter: 'blur(120px)', opacity: 0.15 }} />
                <div className="absolute w-[500px] h-[500px] rounded-full bg-gold-400 float-2" style={{ top: '20%', right: '-10%', filter: 'blur(120px)', opacity: 0.1 }} />
                <div className="absolute w-[400px] h-[400px] rounded-full bg-purple-500 float-3" style={{ bottom: '-5%', left: '30%', filter: 'blur(120px)', opacity: 0.1 }} />
                <div className="absolute w-[300px] h-[300px] rounded-full bg-brand-400 float-4" style={{ top: '50%', left: '60%', filter: 'blur(100px)', opacity: 0.08 }} />
            </div>

            <div className="relative z-10 px-4 mx-auto max-w-5xl text-center sm:px-6">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 animate-fade-in px-4 py-1.5 mb-8 text-sm font-medium rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400">
                    <span className="w-2 h-2 rounded-full animate-pulse bg-brand-400" />
                    {t('hero.badge')}
                </div>

                {/* Tagline with gradient */}
                <h1 className="mb-6 text-5xl font-extrabold leading-tight md:text-7xl animate-fade-up">
                    {companyTagline?.split(' ').map((word, i) => (
                        <span
                            key={i}
                            className={i === 1 ? 'gradient-text' : ''}
                        >{word} </span>
                    ))}
                </h1>

                {/* Cycling subtitle */}
                <div className="mx-auto mb-10 h-8 animate-fade-up animation-delay-200">
                    <p
                        key={phraseIndex}
                        className="text-lg font-medium text-transparent md:text-xl animate-fade-in gradient-text typing-cursor"
                        style={{ animation: 'none' }}
                    >
                        {currentPhrase}
                    </p>
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap gap-4 justify-center items-center animate-fade-up animation-delay-300">
                    <a
                        href="#projects"
                        className="inline-flex gap-2 items-center px-8 py-4 font-bold text-white rounded-full shadow-lg transition-all duration-200 bg-brand-500 hover:bg-brand-600 hover:scale-105 shadow-brand-500/30 hover:shadow-brand-500/50"
                    >
                        {t('hero.cta_primary')}
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </a>
                    <a
                        href="#contact"
                        className="px-8 py-4 font-semibold text-white rounded-full border transition-all duration-200 bg-white/5 hover:bg-white/10 hover:scale-105 border-white/10"
                    >
                        {t('hero.cta_secondary')}
                    </a>
                </div>

                {/* Stats with glass cards and counter animation */}
                <div
                    className={`grid grid-cols-2 gap-4 mt-20 md:grid-cols-4 transition-all duration-700 ${showStats ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                >
                    {stats.map((stat) => (
                        <StatCard key={stat.id} stat={stat} i18n={i18n} t={t} />
                    ))}
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="flex absolute bottom-6 flex-col gap-2 items-center text-xs animate-bounce -translate-x-1/2 md:bottom-8 text-slate-500">
                <span>{t('hero.scroll')}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </div>
        </section>
    )
}

function StatCard({ stat, i18n, t }) {
    const visible = useScrollVisibility()
    const count = useCountUp(stat.value.replace(/\D/g, '') + '+', visible)

    const labels = [t('stats.projects'), t('stats.clients'), t('stats.experience'), t('stats.awards')]
    const label = labels[[1, 2, 3, 4].indexOf(stat.id) >= 0 ? [1, 2, 3, 4].indexOf(stat.id) : 0]

    return (
        <div className="p-5 rounded-2xl border backdrop-blur-sm transition-all duration-300 bg-white/5 border-white/10 hover:border-brand-500/30 hover:bg-white/8">
            <div className="mb-1 text-3xl font-extrabold md:text-4xl gradient-text">
                {count}
            </div>
            <div className="text-sm text-slate-400">{label}</div>
        </div>
    )
}

function useScrollVisibility() {
    const [visible, setVisible] = useState(false)
    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), 800)
        return () => clearTimeout(timer)
    }, [])
    return visible
}
