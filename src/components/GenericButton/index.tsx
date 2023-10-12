import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react'

import { twMerge } from 'tailwind-merge'

type ButtonProps = {
  className?: string
  children: ReactNode | string
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

export const GenericButton = ({
  className = '',
  children,
  ...rest
}: ButtonProps) => {
  const resultClasses = twMerge(
    className,
    'flex h-14 w-full items-center justify-center gap-4 bg-red-500 text-lg text-black transition-all duration-300 hover:bg-red-800 active:bg-red-800'
  )

  return (
    <button className={resultClasses} {...rest}>
      {children}
    </button>
  )
}
