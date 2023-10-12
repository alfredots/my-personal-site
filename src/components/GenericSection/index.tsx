import { ReactNode } from 'react'

import { twMerge } from 'tailwind-merge'

type GenericSectionProps = {
  children: ReactNode
  className?: string
}

export const GenericSection = ({
  children,
  className = ''
}: GenericSectionProps) => {
  const resultClasses = twMerge(
    className,
    'w-full max-w-screen-lg px-4 py-2 md:px-6 md:py-4'
  )
  return <section className={resultClasses}>{children}</section>
}
