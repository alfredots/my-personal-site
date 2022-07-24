import { TypeColors } from 'common/styles/theme'
import React, { ReactNode, DOMAttributes } from 'react'

import * as S from './styles'

export type TextProps = {
  tag: 'h1' | 'h2' | 'h3' | 'H4' | 'p' | 'span'
  children: ReactNode
  variant:
    | 'display'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'p1-regular'
    | 'p1-semibold'
    | 'p2'
    | 'p3'
    | 'p4'
    | 'p5'
  fontFamily?: 'spaceGrotesk' | 'inter'
  fontSize?: string
  lineHeight?: string
  textAlign?: 'center' | 'left' | 'right' | 'justify'
  color?: keyof TypeColors
  cursor?: 'pointer' | 'none'
} & React.HTMLAttributes<HTMLParagraphElement>

export const Text = ({
  tag = 'p',
  children,
  variant = 'p1-regular',
  fontFamily,
  fontSize,
  lineHeight,
  textAlign,
  cursor = 'pointer',
  color = 'white',
  ...rest
}: TextProps) => {
  return (
    <S.Container
      {...{
        as: tag,
        variant,
        fontFamily,
        fontSize,
        lineHeight,
        textAlign,
        color,
        cursor,
        ...{ ...rest }
      }}
    >
      {children}
    </S.Container>
  )
}
