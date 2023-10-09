import { ArrowRight } from '@phosphor-icons/react'

type IconProps = {
  type: 'arrowRight'
  size?: string | number | undefined
  color?: string | undefined
}

export const Icon = ({ type, ...rest }: IconProps) => {
  const icons = {
    arrowRight: <ArrowRight {...rest} />
  }

  return <>{icons[type]}</>
}
