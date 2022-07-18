import { TypeColors } from 'common/styles/theme'
import React, { ReactNode } from 'react'

import * as S from './styles'

interface TextProps {
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
  color: keyof TypeColors
}

export const Text = ({
  tag = 'p',
  children,
  variant = 'p1-regular',
  fontFamily,
  color = 'white'
}: TextProps) => {
  return (
    <S.Container
      as={tag}
      variant={variant}
      fontFamily={fontFamily}
      color={color}
    >
      {children}
    </S.Container>
  )
}
