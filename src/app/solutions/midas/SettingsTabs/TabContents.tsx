import Image from 'next/image'

interface TabContentProps {
  heading: string
  imageSrc: string
  items: string[]
}

export function TabContents({ heading, imageSrc, items }: TabContentProps) {
  return (
    <div className="flex flex-col items-center justify-center py-4">
      <span className="mt-4 bg-gradient-to-r from-blue-400 via-sky-400 to-emerald-300 bg-clip-text px-1 font-alt text-2xl text-transparent sm:text-3xl">
        {heading}
      </span>
      <div className="grid gap-10 py-10 xl:grid-cols-2 xl:px-32">
        <div className="flex items-center justify-center px-10">
          <ul className="list-inside list-disc text-base md:text-xl">
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="flex size-auto w-full justify-end px-10">
          <Image
            src={imageSrc}
            alt={heading}
            width={1400}
            height={1400}
            className="rounded-md border-8 border-slate-500"
          />
        </div>
      </div>
    </div>
  )
}
