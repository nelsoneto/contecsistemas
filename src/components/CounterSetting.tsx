// Counter.tsx
'use client' // Se você está usando Next.js com suporte a componentes client-side

import {
  animate,
  KeyframeOptions,
  useInView,
  useIsomorphicLayoutEffect,
} from 'framer-motion'
import { useRef } from 'react'

type AnimatedCounterProps = {
  from: number
  to: number
  animationOptions?: KeyframeOptions
}

export function CounterSetting({
  from,
  to,
  animationOptions,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useIsomorphicLayoutEffect(() => {
    const element = ref.current

    if (!element) return
    if (!inView) return

    element.textContent = String(from)

    const controls = animate(from, to, {
      duration: 10,
      ease: 'easeOut',
      ...animationOptions,
      onUpdate(value) {
        console.log('value', value)
        element.textContent = value.toFixed(0)
      },
    })

    return () => {
      controls.stop()
    }
  }, [ref, inView, from, to])

  return <span ref={ref} />
}
