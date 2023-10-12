import {
  ArrowRight,
  InstagramLogo,
  LinkedinLogo,
  Envelope
} from '@phosphor-icons/react'

type IconProps = {
  type: 'arrowRight' | 'instagram' | 'linkedin' | 'email'
  size?: string | number | undefined
  color?: string | undefined
}

export const Icon = ({ type, ...rest }: IconProps) => {
  const icons = {
    arrowRight: <ArrowRight {...rest} />,
    instagram: <InstagramLogo {...rest} />,
    linkedin: <LinkedinLogo {...rest} />,
    email: <Envelope {...rest} />
  }

  return <>{icons[type]}</>
}
