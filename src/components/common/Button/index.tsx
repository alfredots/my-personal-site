import { ReactNode } from 'react'

import { twMerge } from 'tailwind-merge'

type ButtonProps = {
  className?: string
  children: ReactNode | string
}

export const Button = ({ className = '', children }: ButtonProps) => {
  const resultClasses = twMerge(
    className,
    'w-full max-w-screen-lg px-4 py-2 md:px-6 md:py-4'
  )

  return (
    <button className="h-14 w-full bg-red-500 transition-all duration-300 hover:bg-red-800	">
      {children}
    </button>
  )
}
