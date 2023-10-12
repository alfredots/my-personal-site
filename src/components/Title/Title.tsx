import { ReactNode } from 'react'

type TitleProps = {
  children: ReactNode | string
  isTitleSection?: boolean
}

export const Title = ({ children, isTitleSection = false }: TitleProps) => {
  return (
    <div className="w-fit">
      {isTitleSection && <h1 className="text-3xl">{children}</h1>}
      {!isTitleSection && <h2 className="text-2xl">{children}</h2>}
      <div className="h-1 w-full bg-red-500" />
    </div>
  )
}
