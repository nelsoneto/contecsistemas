'use client'
import * as Tabs from '@radix-ui/react-tabs'

export interface ContentTabProps {
  value: string
  title?: string
}

export function ContentTab({ value, title }: ContentTabProps) {
  return (
    <>
      <Tabs.Content
        className="flex flex-col items-center justify-center"
        value={value}
      >
        <div className="grid w-auto grid-cols-2 py-10">
          <div className="flex w-auto flex-col">
            <span>{title}</span>
            <ul className="list-disc">
              <li>aosdfkasodfasodfksdk</li>
              <li>aosdfkasodfasodfksdk</li>
              <li>aosdfkasodfasodfksdk</li>
              <li>aosdfkasodfasodfksdk</li>
              <li>aosdfkasodfasodfksdk</li>
              <li>aosdfkasodfasodfksdk</li>
            </ul>
          </div>
        </div>
      </Tabs.Content>
      {/* <Tabs.Content
        className="flex flex-col items-center justify-center"
        value={value}
      >
        <span>tdasfasdfsaab2</span>
      </Tabs.Content>
      <Tabs.Content
        className="flex flex-col items-center justify-center"
        value={value}
      >
        <span>tab3</span>
      </Tabs.Content> */}
    </>
  )
}
