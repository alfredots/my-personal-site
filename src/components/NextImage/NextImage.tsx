import Image, { ImageProps } from 'next/image'

export const NextImage = ({ src, alt, ...rest }: ImageProps) => {
  return <Image src={src} alt={alt} {...rest} />
}
