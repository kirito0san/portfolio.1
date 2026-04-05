import { useTranslation } from 'react-i18next'
import { company } from '../../data/data'

export default function Footer() {
    const { t } = useTranslation()
    const year = new Date().getFullYear()

    return (
        <footer className="bg-slate-950 border-t border-white/5 py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-400 text-sm">
                <p>
                    © {year}{' '}
                    <span className="text-white font-semibold">{company.name}</span>{' '}
                    — {t('footer.rights')}
                </p>
                <div className="flex items-center gap-5">
                    {Object.entries(company.socialLinks).map(([platform, url]) => (
                        <a
                            key={platform}
                            href={url}
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-brand-400 transition-colors capitalize"
                        >
                            {platform}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    )
}