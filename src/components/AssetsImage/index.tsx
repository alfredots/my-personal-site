import { ImageProps } from 'next/image'

import invisionImg from 'assets/portfolio/invision.webp'
import proffyImg from 'assets/portfolio/proffy.webp'
import staemImg from 'assets/portfolio/staem.webp'
import trainerImg from 'assets/portfolio/trainer-tito.webp'
import unxImg from 'assets/portfolio/unx.webp'
import worldTripImg from 'assets/portfolio/world-trip.webp'

import { NextImage } from 'components/NextImage'

const imagesUrl = {
  staemImg,
  invisionImg,
  proffyImg,
  trainerImg,
  unxImg,
  worldTripImg
}

type AssetsImageProps = {
  src: keyof typeof imagesUrl
  objectFit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'
} & Omit<ImageProps, 'src'>

export const AssetsImage = ({
  src,
  objectFit = 'fill',
  ...rest
}: AssetsImageProps) => {
  return <NextImage src={imagesUrl[src]} {...rest} style={{ objectFit }} />
}
