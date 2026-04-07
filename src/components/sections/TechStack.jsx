import { useTranslation } from 'react-i18next'

const techs = [
    'React', 'Next.js', 'TypeScript', 'Node.js', 'Flutter', 'React Native',
    'MongoDB', 'Firebase', 'PostgreSQL', 'Redis', 'Docker', 'AWS',
    'Figma', 'Tailwind CSS', 'GraphQL', 'Git', 'Vite', 'Express',
]

export default function TechStack() {
    const { t } = useTranslation()

    return (
        <section id="techstack" className="py-16 overflow-hidden bg-slate-950/50">
            <div className="px-4 mx-auto mb-8 max-w-7xl sm:px-6">
                <div className="text-center">
                    <div className="w-12 h-1 mx-auto mb-4 rounded-full bg-brand-500"></div>
                    <h2 className="mb-2 text-2xl font-extrabold text-white md:text-3xl">
                        {t('techstack.title')}
                    </h2>
                    <p className="text-base leading-relaxed text-slate-400">
                        {t('techstack.subtitle')}
                    </p>
                </div>
            </div>

            {/* Marquee Row 1 - left to right */}
            <div className="relative mb-3">
                <div className="absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-slate-950 to-transparent pointer-events-none" />
                <div className="absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-r from-transparent to-slate-950 pointer-events-none" />
                <div className="flex gap-6 animate-marquee">
                    {[...techs, ...techs].map((tech, i) => (
                        <span
                            key={`${tech}-${i}`}
                            className="flex-shrink-0 px-5 py-2 text-sm font-medium rounded-full bg-white/5 border border-white/10 text-slate-300 hover:border-brand-500/40 hover:text-brand-400 transition-colors cursor-default"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            {/* Marquee Row 2 - right to left (reversed) */}
            <div className="relative">
                <div className="absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-slate-950 to-transparent pointer-events-none" />
                <div className="absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-r from-transparent to-slate-950 pointer-events-none" />
                <div className="flex gap-6 animate-marquee" style={{ animationDirection: 'reverse', animationDuration: '35s' }}>
                    {[...techs.slice().reverse(), ...techs.slice().reverse()].map((tech, i) => (
                        <span
                            key={`${tech}-r-${i}`}
                            className="flex-shrink-0 px-5 py-2 text-sm font-medium rounded-full bg-white/5 border border-white/10 text-slate-300 hover:border-brand-500/40 hover:text-brand-400 transition-colors cursor-default"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    )
}
