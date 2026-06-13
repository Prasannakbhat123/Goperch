import { useEffect, useState } from 'react'

interface UseAnimatedCounterOptions {
  end: number
  duration?: number
  decimals?: number
  isActive?: boolean
}

export function useAnimatedCounter({
  end,
  duration = 2000,
  decimals = 0,
  isActive = true,
}: UseAnimatedCounterOptions) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isActive) return

    let startTime: number | null = null
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Number((eased * end).toFixed(decimals)))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration, decimals, isActive])

  return count
}
