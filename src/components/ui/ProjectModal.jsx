import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

export default function ProjectModal({ project, onClose }) {
    const { t, i18n } = useTranslation()
    const [currentSlide, setCurrentSlide] = useState(0)
    const isAr = i18n.language === 'ar'

    useEffect(() => {
        const onKey = (e) => {
            if (e.key === 'Escape') onClose()
            if (e.key === 'ArrowLeft') setCurrentSlide((p) => p + 1)
            if (e.key === 'ArrowRight') setCurrentSlide((p) => p - 1)
        }
        window.addEventListener('keydown', onKey)
        return () => window.removeEventListener('keydown', onKey)
    }, [onClose])

    useEffect(() => {
        document.body.style.overflow = project ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [project])

    // Reset slide when project changes
    useEffect(() => {
        setCurrentSlide(0)
    }, [project])

    if (!project) return null

    const title = isAr ? project.title : (project.titleEn || project.title)
    const description = isAr ? project.description : (project.descriptionEn || project.description)
    const category = isAr ? project.category : (project.categoryEn || project.category)
    const images = project.images || [project.image]

    const nextSlide = () => setCurrentSlide((p) => (p + 1) % images.length)
    const prevSlide = () => setCurrentSlide((p) => (p - 1 + images.length) % images.length)

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className="bg-slate-900 border border-white/10 rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl animate-fade-up"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Image gallery */}
                <div className="relative h-64 overflow-hidden bg-slate-800">
                    <img
                        src={images[currentSlide]}
                        alt={`${title} - ${currentSlide + 1}`}
                        className="w-full h-full object-cover transition-opacity duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />

                    {/* Close button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 left-4 w-9 h-9 flex items-center justify-center rounded-full bg-black/50 hover:bg-black/80 text-white transition-colors text-xl"
                        aria-label="close"
                    >
                        ✕
                    </button>

                    {/* Navigation arrows */}
                    {images.length > 1 && (
                        <>
                            <button
                                onClick={(e) => { e.stopPropagation(); prevSlide() }}
                                className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors"
                            >
                                {isAr ? '→' : '←'}
                            </button>
                            <button
                                onClick={(e) => { e.stopPropagation(); nextSlide() }}
                                className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors"
                            >
                                {isAr ? '←' : '→'}
                            </button>

                            {/* Slide indicators */}
                            <div className="absolute bottom-3 inset-x-0 flex gap-1.5 justify-center">
                                {images.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={(e) => { e.stopPropagation(); setCurrentSlide(i) }}
                                        className={`h-1.5 rounded-full transition-all duration-300 ${i === currentSlide ? 'w-6 bg-brand-400' : 'w-1.5 bg-white/30 hover:bg-white/50'
                                            }`}
                                    />
                                ))}
                            </div>
                        </>
                    )}
                </div>

                {/* Thumbnail strip */}
                {images.length > 1 && (
                    <div className="flex gap-2 p-3 overflow-x-auto bg-slate-950/50 border-b border-white/5">
                        {images.map((img, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentSlide(i)}
                                className={`flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden border-2 transition-all ${i === currentSlide ? 'border-brand-400 opacity-100' : 'border-transparent opacity-50 hover:opacity-80'
                                    }`}
                            >
                                <img src={img} alt="" className="w-full h-full object-cover" />
                            </button>
                        ))}
                    </div>
                )}

                {/* Content */}
                <div className="p-6">
                    <span className="text-xs font-semibold text-brand-400 uppercase tracking-widest">
                        {category}
                    </span>
                    <h3 className="text-2xl font-bold text-white mt-1 mb-3">{title}</h3>
                    <p className="text-slate-400 leading-relaxed mb-5">{description}</p>
                    {project.tags && (
                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.tags.map((tag) => (
                                <span key={tag} className="px-3 py-1 text-xs font-medium bg-brand-500/15 text-brand-400 rounded-full border border-brand-500/20">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
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
