import { useEffect, useRef, useState } from 'react'

/**
 * Hook بسيط يضيف class "is-visible" لما العنصر يظهر في الشاشة
 */
export function useScrollAnimation(threshold = 0.15) {
    const ref = useRef(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.disconnect()
                }
            },
            { threshold },
        )

        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [threshold])

    return { ref, isVisible }
}