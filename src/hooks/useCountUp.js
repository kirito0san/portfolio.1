import { useState, useEffect, useRef } from 'react'

export function useCountUp(endValue, isVisible, duration = 2000) {
    const [count, setCount] = useState(0)
    const hasRun = useRef(false)

    useEffect(() => {
        if (!isVisible || hasRun.current) return
        hasRun.current = true

        // Extract numeric value
        const match = String(endValue).match(/(\d+)/)
        if (!match) {
            setCount(endValue)
            return
        }

        const target = parseInt(match[1], 10)
        const suffix = String(endValue).replace(match[1], '')
        const startTime = performance.now()

        const animate = (currentTime) => {
            const elapsed = currentTime - startTime
            const progress = Math.min(elapsed / duration, 1)
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3)
            const current = Math.floor(eased * target)
            setCount(current + suffix)

            if (progress < 1) {
                requestAnimationFrame(animate)
            } else {
                setCount(endValue)
            }
        }

        requestAnimationFrame(animate)
    }, [endValue, isVisible, duration])

    return count
}
