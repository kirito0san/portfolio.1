import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { company } from '../../data/data'
import LanguageSwitcher from '../ui/LanguageSwitcher'
import { LogoIcon } from '../../assets/logoIcon'

export default function Navbar() {
    const { t } = useTranslation()
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const [activeLink, setActiveLink] = useState('#home')

    const navLinks = [
        { href: '#home', label: t('nav.home') },
        { href: '#services', label: t('nav.services') },
        { href: '#benefits', label: t('nav.benefits') },
        { href: '#projects', label: t('nav.projects') },
        { href: '#testimonials', label: t('nav.testimonials') },
        { href: '#contact', label: t('nav.contact') },
    ]

    // Scroll tracking: set active section based on IntersectionObserver
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    useEffect(() => {
        const sections = navLinks.map((link) => link.href)
        const observers = []
        let mostVisibleSection = '#home'
        let maxVisibleRatio = 0

        sections.forEach((selector) => {
            const el = document.querySelector(selector)
            if (!el) return
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            const ratio = entry.intersectionRatio
                            if (ratio > maxVisibleRatio) {
                                maxVisibleRatio = ratio
                                mostVisibleSection = selector
                            }
                        } else {
                            // Section left viewport
                            if (selector === mostVisibleSection) {
                                maxVisibleRatio = 0
                            }
                        }
                    })
                    setActiveLink(mostVisibleSection)
                },
                { threshold: [0, 0.15, 0.3, 0.5, 0.7, 1] }
            )
            observer.observe(el)
            observers.push(observer)
        })

        return () => observers.forEach((o) => o.disconnect())
    }, [navLinks])

    const handleNavClick = (href) => {
        setActiveLink(href)
        setMenuOpen(false)
    }

    return (
        <header
            className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
                scrolled
                    ? 'h-[70px] backdrop-blur-md bg-slate-950/90'
                    : 'h-[80px] bg-transparent'
            }`}
        >
            <div className="flex h-full justify-between items-center px-6 mx-auto max-w-7xl">
                {/* Logo */}
                <a
                    href="#home"
                    className="flex items-center gap-3 group"
                    onClick={() => handleNavClick('#home')}
                >
                    <div className="transition-transform duration-300 group-hover:scale-105">
                        <LogoIcon width={44} height={44} />
                    </div>
                    <span className="hidden sm:block text-xl font-bold tracking-wide">
                        <span className="text-brand-400">C</span>
                        <span className="text-white">odev</span>
                    </span>
                </a>

                {/* Desktop nav */}
                <nav className="hidden lg:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => handleNavClick(link.href)}
                            className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                                activeLink === link.href
                                    ? 'text-brand-400 bg-brand-500/15'
                                    : 'text-slate-300 hover:text-white'
                            }`}
                        >
                            {link.label}
                            {activeLink === link.href && (
                                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-brand-400" />
                            )}
                        </a>
                    ))}
                </nav>

                {/* Right side: lang switcher + CTA */}
                <div className="flex items-center gap-3">
                    <div className="hidden md:block">
                        <LanguageSwitcher />
                    </div>
                    <a
                        href="#contact"
                        className="hidden sm:inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-brand-500/25"
                        onClick={() => handleNavClick('#contact')}
                    >
                        <span>{t('nav.cta')}</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>

                {/* Mobile: lang + hamburger */}
                <div className="flex lg:hidden items-center gap-2">
                    <LanguageSwitcher className="!px-2 !py-1.5" />
                    <button
                        className="p-2 text-slate-300 hover:text-white transition-colors"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="toggle menu"
                    >
                        <div className="w-6 h-5 flex flex-col justify-between">
                            <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                            <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                            <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <div
                className={`lg:hidden overflow-hidden transition-all duration-300 ${
                    menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                }`}
            >
                <nav className="flex flex-col gap-1 px-4 pt-2 pb-6 backdrop-blur-md bg-slate-950/95 border-t border-white/5">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => handleNavClick(link.href)}
                            className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                                activeLink === link.href
                                    ? 'bg-brand-500/15 text-brand-400'
                                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                            }`}
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        className="mt-3 flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white rounded-xl bg-brand-500 hover:bg-brand-600 transition-colors"
                        onClick={() => handleNavClick('#contact')}
                    >
                        <span>{t('nav.cta')}</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </nav>
            </div>
        </header>
    )
}