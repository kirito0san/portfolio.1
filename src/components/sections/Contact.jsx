import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { company } from '../../data/data'
import SectionHeading from '../ui/SectionHeading'

export default function Contact() {
    const { t } = useTranslation()
    const [form, setForm] = useState({ name: '', email: '', message: '' })
    const [submitted, setSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)

    const contactInfo = [
        { icon: '📧', label: t('contact.email_label'), value: company.email, href: `mailto:${company.email}` },
        { icon: '📞', label: t('contact.phone_label'), value: company.phone, href: `tel:${company.phone}` },
        { icon: '📍', label: t('contact.address_label'), value: company.address, href: '#' },
    ]

    const handleChange = (e) =>
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            setSubmitted(true)
            setForm({ name: '', email: '', message: '' })
        }, 1200)
    }

    return (
        <section id="contact" className="py-24 bg-slate-900/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <SectionHeading
                    title={t('contact.title')}
                    subtitle={t('contact.subtitle')}
                />
                <div className="grid lg:grid-cols-2 gap-12 items-start">

                    {/* Contact info */}
                    <div className="space-y-6">
                        <p className="text-slate-400 leading-relaxed text-lg">{t('contact.intro')}</p>
                        <div className="space-y-4">
                            {contactInfo.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className="flex items-center gap-4 p-4 bg-slate-900/60 border border-white/5 hover:border-brand-500/30 rounded-xl transition-all duration-200 group"
                                >
                                    <span className="text-2xl">{item.icon}</span>
                                    <div>
                                        <p className="text-xs text-slate-500 mb-0.5">{item.label}</p>
                                        <p className="text-white font-medium group-hover:text-brand-400 transition-colors">
                                            {item.value}
                                        </p>
                                    </div>
                                </a>
                            ))}
                        </div>
                        <div className="flex gap-3 pt-2">
                            {Object.entries(company.socialLinks).map(([platform, url]) => (
                                <a
                                    key={platform}
                                    href={url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-brand-500/20 hover:text-brand-400 text-slate-400 text-xs font-semibold transition-all capitalize"
                                >
                                    {platform[0].toUpperCase()}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Form */}
                    <div className="bg-slate-900/60 border border-white/5 rounded-2xl p-8">
                        {submitted ? (
                            <div className="text-center py-10 animate-fade-in">
                                <div className="text-5xl mb-4">✅</div>
                                <h3 className="text-xl font-bold text-white mb-2">{t('contact.success_title')}</h3>
                                <p className="text-slate-400">{t('contact.success_body')}</p>
                                <button
                                    onClick={() => setSubmitted(false)}
                                    className="mt-6 text-brand-400 hover:text-brand-300 text-sm font-medium transition-colors"
                                >
                                    {t('contact.send_another')}
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div>
                                    <label className="block text-sm font-medium text-slate-300 mb-2">{t('contact.name')}</label>
                                    <input
                                        type="text" name="name" value={form.name}
                                        onChange={handleChange} required
                                        placeholder={t('contact.name_ph')}
                                        className="w-full bg-slate-800/50 border border-white/10 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 rounded-xl px-4 py-3 text-white placeholder-slate-500 outline-none transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-300 mb-2">{t('contact.email')}</label>
                                    <input
                                        type="email" name="email" value={form.email}
                                        onChange={handleChange} required
                                        placeholder={t('contact.email_ph')}
                                        className="w-full bg-slate-800/50 border border-white/10 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 rounded-xl px-4 py-3 text-white placeholder-slate-500 outline-none transition-all"
                                        dir="ltr"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-300 mb-2">{t('contact.message')}</label>
                                    <textarea
                                        name="message" value={form.message}
                                        onChange={handleChange} required rows={5}
                                        placeholder={t('contact.message_ph')}
                                        className="w-full bg-slate-800/50 border border-white/10 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 rounded-xl px-4 py-3 text-white placeholder-slate-500 outline-none transition-all resize-none"
                                    />
                                </div>
                                <button
                                    type="submit" disabled={loading}
                                    className="w-full bg-brand-500 hover:bg-brand-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl transition-all hover:scale-[1.01] shadow-lg shadow-brand-500/20 flex items-center justify-center gap-2"
                                >
                                    {loading ? (
                                        <>
                                            <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                                            </svg>
                                            {t('contact.sending')}
                                        </>
                                    ) : t('contact.send')}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}