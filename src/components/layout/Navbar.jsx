import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { company } from '../../data/data'
import LanguageSwitcher from '../ui/LanguageSwitcher'

export default function Navbar() {
    const { t } = useTranslation()
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const [activeLink, setActiveLink] = useState('#home')

    const navLinks = [
        { href: '#home', label: t('nav.home') },
        { href: '#services', label: t('nav.services') },
        { href: '#projects', label: t('nav.projects') },
        { href: '#team', label: t('nav.team') },
        { href: '#testimonials', label: t('nav.testimonials') },
        { href: '#contact', label: t('nav.contact') },
    ]

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const handleNavClick = (href) => {
        setActiveLink(href)
        setMenuOpen(false)
    }

    return (
        <header
            className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled
                ? 'bg-slate-950/90 backdrop-blur-md shadow-lg shadow-black/30 py-3'
                : 'bg-transparent py-5'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
                {/* Logo */}
                <a
                    href="#home"
                    className="text-xl font-bold text-white tracking-wide shrink-0"
                    onClick={() => handleNavClick('#home')}
                >
                    <span className="text-brand-400">{company.name.split('')[0]}</span>
                    {company.name.slice(1)}
                </a>

                {/* Desktop nav */}
                <nav className="hidden md:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => handleNavClick(link.href)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${activeLink === link.href
                                ? 'bg-brand-500/20 text-brand-400'
                                : 'text-slate-300 hover:text-white hover:bg-white/5'
                                }`}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                {/* Right side: lang switcher + CTA */}
                <div className="hidden md:flex items-center gap-3">
                    <LanguageSwitcher />
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors duration-200"
                        onClick={() => handleNavClick('#contact')}
                    >
                        {t('nav.cta')}
                    </a>
                </div>

                {/* Mobile: lang + hamburger */}
                <div className="md:hidden flex items-center gap-2">
                    <LanguageSwitcher />
                    <button
                        className="p-2 text-slate-300 hover:text-white"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="toggle menu"
                    >
                        <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
                        <span className={`block w-6 h-0.5 bg-current my-1.5 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                        <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <nav className="bg-slate-900/95 backdrop-blur-md px-4 pb-4 pt-2 flex flex-col gap-1">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => handleNavClick(link.href)}
                            className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${activeLink === link.href
                                ? 'bg-brand-500/20 text-brand-400'
                                : 'text-slate-300 hover:text-white hover:bg-white/5'
                                }`}
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        className="mt-2 bg-brand-500 text-white text-sm font-semibold px-5 py-3 rounded-lg text-center"
                        onClick={() => handleNavClick('#contact')}
                    >
                        {t('nav.cta')}
                    </a>
                </nav>
            </div>
        </header>
    )
}