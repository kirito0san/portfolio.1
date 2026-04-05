import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

export default function ProjectModal({ project, onClose }) {
    const { t, i18n } = useTranslation()
    const isAr = i18n.language === 'ar'

    useEffect(() => {
        const onKey = (e) => e.key === 'Escape' && onClose()
        window.addEventListener('keydown', onKey)
        return () => window.removeEventListener('keydown', onKey)
    }, [onClose])

    useEffect(() => {
        document.body.style.overflow = project ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [project])

    if (!project) return null

    const title = isAr ? project.title : (project.titleEn || project.title)
    const description = isAr ? project.description : (project.descriptionEn || project.description)
    const category = isAr ? project.category : (project.categoryEn || project.category)

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className="bg-slate-900 border border-white/10 rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl animate-fade-up"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="relative h-56 overflow-hidden">
                    <img src={project.image} alt={title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                    <button
                        onClick={onClose}
                        className="absolute top-4 left-4 w-9 h-9 flex items-center justify-center rounded-full bg-black/50 hover:bg-black/80 text-white transition-colors text-xl"
                        aria-label="close"
                    >
                        ✕
                    </button>
                </div>
                <div className="p-6">
                    <span className="text-xs font-semibold text-brand-400 uppercase tracking-widest">
                        {category}
                    </span>
                    <h3 className="text-2xl font-bold text-white mt-1 mb-3">{title}</h3>
                    <p className="text-slate-400 leading-relaxed mb-5">{description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => (
                            <span key={tag} className="px-3 py-1 text-xs font-medium bg-brand-500/15 text-brand-400 rounded-full border border-brand-500/20">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <div className="flex gap-3">
                        <a
                            href={project.link} target="_blank" rel="noreferrer"
                            className="flex-1 text-center bg-brand-500 hover:bg-brand-600 text-white font-semibold py-3 rounded-xl transition-colors"
                        >
                            {t('modal.visit')}
                        </a>
                        <button
                            onClick={onClose}
                            className="flex-1 text-center bg-white/5 hover:bg-white/10 text-slate-300 font-semibold py-3 rounded-xl transition-colors"
                        >
                            {t('modal.close')}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}