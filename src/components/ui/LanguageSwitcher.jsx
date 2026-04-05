import { useLanguage } from '../../hooks/useLanguage'

/**
 * زرار تبديل اللغة — يظهر في الـ Navbar
 * Props: className (optional)
 */
export default function LanguageSwitcher({ className = '' }) {
    const { isAr, toggleLanguage } = useLanguage()

    return (
        <button
            onClick={toggleLanguage}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 hover:border-brand-500/40 bg-white/5 hover:bg-brand-500/10 text-slate-300 hover:text-brand-400 text-sm font-semibold transition-all duration-200 ${className}`}
            aria-label="Switch language"
        >
            {/* Globe icon */}
            <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="9" />
                <path d="M3.6 9h16.8M3.6 15h16.8M12 3a13.5 13.5 0 010 18M12 3a13.5 13.5 0 000 18" strokeLinecap="round" />
            </svg>
            <span>{isAr ? 'EN' : 'ع'}</span>
        </button>
    )
}