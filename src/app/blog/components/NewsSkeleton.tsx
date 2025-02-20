// components/NewsSkeleton.tsx
import { Skeleton } from '@/components/ui/skeleton'

export function NewsSkeleton() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-x-8 border-b border-gray-200 pb-6 md:flex-row">
      {/* Imagem */}
      <div className="mb-4 flex w-11/12 flex-col md:w-5/12">
        <Skeleton className="h-48 w-full rounded-lg" />
      </div>
      {/* Conteúdo */}
      <div className="flex w-11/12 flex-col gap-y-4 md:w-5/12 md:gap-y-6">
        <Skeleton className="h-14 w-11/12 rounded-md" />
        <Skeleton className="h-20 w-full rounded-md" />
        <Skeleton className="h-6 w-2/3 rounded-md" />
        {/* Data */}
        <div className="flex items-center gap-x-2">
          <Skeleton className="h-4 w-4 rounded-full" />
          <Skeleton className="h-4 w-24 rounded-md" />
        </div>
        {/* Tags */}
        <div className="flex flex-wrap gap-x-2">
          <Skeleton className="h-6 w-16 rounded-md" />
          <Skeleton className="h-6 w-16 rounded-md" />
        </div>
        {/* Botão */}
        <Skeleton className="h-10 w-24 rounded-md" />
      </div>
    </div>
  )
}
