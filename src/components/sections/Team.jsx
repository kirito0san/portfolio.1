import { useTranslation } from 'react-i18next'
import { team } from '../../data/data'
import SectionHeading from '../ui/SectionHeading'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

function TeamCard({ member, index }) {
    const { i18n } = useTranslation()
    const isAr = i18n.language === 'ar'
    const { ref, isVisible } = useScrollAnimation()

    return (
        <div
            ref={ref}
            style={{ animationDelay: `${index * 100}ms` }}
            className={`group text-center bg-slate-900/50 border border-white/5 hover:border-brand-500/20 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 ${isVisible ? 'animate-fade-up' : 'opacity-0'
                }`}
        >
            <div className="relative w-24 h-24 mx-auto mb-4">
                <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-full rounded-full object-cover ring-2 ring-brand-500/20 group-hover:ring-brand-500/60 transition-all duration-300"
                />
                <div className="absolute bottom-0 left-0 w-4 h-4 bg-green-400 rounded-full border-2 border-slate-900" />
            </div>
            <h3 className="text-lg font-bold text-white">{member.name}</h3>
            <p className="text-brand-400 text-sm font-medium mb-2">
                {isAr ? member.role : (member.roleEn || member.role)}
            </p>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
                {isAr ? member.bio : (member.bioEn || member.bio)}
            </p>
            <a
                href={member.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-brand-400 transition-colors"
            >
                LinkedIn →
            </a>
        </div>
    )
}

export default function Team() {
    const { t } = useTranslation()

    return (
        <section id="team" className="py-24 bg-slate-900/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <SectionHeading
                    title={t('team.title')}
                    subtitle={t('team.subtitle')}
                />
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {team.map((member, i) => (
                        <TeamCard key={member.id} member={member} index={i} />
                    ))}
                </div>
            </div>
        </section>
    )
}