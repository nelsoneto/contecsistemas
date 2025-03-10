'use client'
import * as Tabs from '@radix-ui/react-tabs'
import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

export interface TabItemProps {
  value: string
  title: string
  isSelected?: boolean
  onClick?: () => void
  className?: string
}

export function TabItem({ value, title, isSelected = false }: TabItemProps) {
  const tabRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (isSelected && tabRef.current) {
      tabRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [isSelected])

  return (
    <Tabs.Trigger
      value={value}
      className="relative rounded-sm bg-slate-800 p-2 font-alt text-2xl hover:bg-slate-700 hover:text-blue-400 data-[state=active]:bg-slate-700 data-[state=active]:text-blue-400 xl:text-sm"
      ref={tabRef}
    >
      <span>{title}</span>
      {isSelected && (
        <motion.div
          layoutId="activeTab"
          className="rounded-2xl bg-blue-400 xl:absolute xl:-bottom-0.5 xl:left-0 xl:right-0 xl:h-1"
        />
      )}
    </Tabs.Trigger>
  )
}
