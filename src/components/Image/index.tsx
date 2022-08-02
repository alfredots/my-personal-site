import * as S from './styles'
import { ImageProps } from 'next/image'

export const Image = (ImageProps: ImageProps) => {
  return <S.Img {...{ ...ImageProps }} />
}
