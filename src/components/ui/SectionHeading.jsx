export default function SectionHeading({ title, subtitle }) {
    return (
        <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="w-12 h-1 mx-auto mb-4 rounded-full bg-brand-500"></div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">{title}</h2>
            <p className="text-slate-400 text-base leading-relaxed">{subtitle}</p>
        </div>
    )
}
