'use client'
import * as Tabs from '@radix-ui/react-tabs'
import { useEffect, useRef, useState } from 'react'
import { TabContents } from './TabContents'
import { TabData } from './tabData'
import { TabItem } from './TabItem'

export function SettingsTabs() {
  const [currentTab, setCurrentTab] = useState('tab1')
  const tabRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})

  useEffect(() => {
    const element = tabRefs.current[currentTab]
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }, [currentTab])

  return (
    <Tabs.Root
      value={currentTab}
      onValueChange={setCurrentTab}
      className="h-auto w-full bg-slate-900 py-10"
      defaultValue="tab1"
    >
      <Tabs.List
        className="grid gap-2 px-2 sm:grid-cols-2 xl:grid-cols-9"
        aria-label="Categoria"
      >
        {TabData.map((tab) => (
          <TabItem
            key={tab.value}
            value={tab.value}
            title={tab.title}
            isSelected={currentTab === tab.value}
          />
        ))}
      </Tabs.List>

      {TabData.map((tab) => (
        <Tabs.Content
          key={tab.value}
          value={tab.value}
          className="tabs-content"
          ref={(el) => {
            tabRefs.current[tab.value] = el
          }}
        >
          <TabContents
            heading={tab.heading}
            imageSrc={tab.imageSrc}
            items={tab.items}
          />
        </Tabs.Content>
      ))}
    </Tabs.Root>
  )
}
