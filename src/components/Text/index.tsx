import { TypeColors } from 'common/styles/theme'
import React, { ReactNode } from 'react'

import * as S from './styles'

type TextAlignProps = 'center' | 'left' | 'right' | 'justify'

export type TextProps = {
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span'
  children: ReactNode
  variant: 'display' | 'h1' | 'h2' | 'h3' | 'h4' | 'p-regular' | 'p-semibold'
  fontFamily?: 'spaceGrotesk' | 'inter'
  fontSize?: string | string[]
  lineHeight?: string | string[]
  textAlign?: TextAlignProps[] | TextAlignProps
  color?: keyof TypeColors
  cursor?: 'pointer' | 'none' | 'unset'
} & React.HTMLAttributes<HTMLParagraphElement>

export const Text = ({
  tag = 'p',
  children,
  variant = 'p-regular',
  fontFamily,
  fontSize,
  lineHeight,
  textAlign,
  cursor = 'unset',
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
