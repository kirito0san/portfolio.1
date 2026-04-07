import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { projects, projectCategories, projectCategoriesEn } from '../../data/data'
import SectionHeading from '../ui/SectionHeading'
import ProjectModal from '../ui/ProjectModal'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

function ProjectCard({ project, onOpen }) {
    const { i18n } = useTranslation()
    const isAr = i18n.language === 'ar'
    const { ref, isVisible } = useScrollAnimation()

    return (
        <div
            ref={ref}
            className={`group relative cursor-pointer bg-slate-900/50 border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 ${isVisible ? 'animate-fade-up' : 'opacity-0'
                }`}
            onClick={() => onOpen(project)}
        >
            {/* Gradient border on hover */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-brand-500/15 via-transparent to-gold-400/10" />

            <div className="relative z-10">
                <div className="relative h-52 overflow-hidden">
                    <img
                        src={project.image}
                        alt={isAr ? project.title : (project.titleEn || project.title)}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                    <span className="absolute top-3 right-3 text-xs font-semibold bg-brand-500/80 text-white px-2.5 py-1 rounded-full backdrop-blur-sm">
                        {isAr ? project.category : (project.categoryEn || project.category)}
                    </span>
                </div>
                <div className="p-5">
                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-brand-400 transition-colors">
                        {isAr ? project.title : (project.titleEn || project.title)}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2">
                        {isAr ? project.description : (project.descriptionEn || project.description)}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                            <span key={tag} className="px-2.5 py-1 text-xs bg-brand-500/10 text-brand-400/80 rounded-full border border-brand-500/10">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function Projects() {
    const { t, i18n } = useTranslation()
    const isAr = i18n.language === 'ar'
    const [activeCategory, setActiveCategory] = useState(0)
    const [selectedProject, setSelectedProject] = useState(null)

    const categories = isAr ? projectCategories : (projectCategoriesEn || projectCategories)

    const filtered =
        activeCategory === 0
            ? projects
            : projects.filter((p) => {
                const cat = isAr ? p.category : (p.categoryEn || p.category)
                return cat === categories[activeCategory]
            })

    return (
        <section id="projects" className="relative py-24 overflow-hidden">
            {/* Background depth orbs */}
            <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-gold-400 section-orb-1" style={{ transform: 'translateX(50%)', opacity: 0.04 }} />
            <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-brand-500 section-orb-2" style={{ transform: 'translateX(-30%)', top: '10%' }} />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
                <SectionHeading
                    title={t('projects.title')}
                    subtitle={t('projects.subtitle')}
                />

                {/* Filter */}
                <div className="flex flex-wrap justify-center gap-2 mb-10">
                    {categories.map((cat, i) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(i)}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${activeCategory === i
                                ? 'bg-brand-500 text-white shadow-lg shadow-brand-500/30'
                                : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filtered.map((project) => (
                        <ProjectCard key={project.id} project={project} onOpen={setSelectedProject} />
                    ))}
                </div>
            </div>

            <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        </section>
    )
}
