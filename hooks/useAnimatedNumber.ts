"use client"

import { useEffect, useRef, useState } from "react"

export function useAnimatedNumber(value: number) {
  const prev = useRef(value)
  const [display, setDisplay] = useState(value)
  const [isRollback, setIsRollback] = useState(false)

  useEffect(() => {
    const rollback = value < prev.current
    setIsRollback(rollback)

    let frame: number
    const start = display
    const diff = value - start
    const duration = rollback ? 180 : 260
    const startTime = performance.now()

    function tick(now: number) {
      const progress = Math.min((now - startTime) / duration, 1)
      setDisplay(start + diff * progress)

      if (progress < 1) {
        frame = requestAnimationFrame(tick)
      }
    }

    frame = requestAnimationFrame(tick)
    prev.current = value

    return () => cancelAnimationFrame(frame)
  }, [value])

  return Math.round(display)
}

