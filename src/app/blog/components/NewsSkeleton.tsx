// components/NewsSkeleton.tsx
import { Skeleton } from '@/components/ui/skeleton'

export function NewsSkeleton() {
  return (
    <div className="flex flex-col items-center justify-center gap-x-6 border-b border-gray-200 pb-6 md:flex-row">
      {/* Imagem */}
      <div className="flex flex-col md:w-1/2">
        <Skeleton className="h-48 w-full rounded-lg" />
      </div>
      {/* Conteúdo */}
      <div className="flex flex-col gap-y-4 md:w-1/2 md:gap-y-6">
        <Skeleton className="h-8 w-3/4 rounded-md" />
        <Skeleton className="h-4 w-full rounded-md" />
        <Skeleton className="h-4 w-2/3 rounded-md" />
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
