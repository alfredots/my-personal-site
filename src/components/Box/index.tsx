import { TypeColors } from 'common/styles/theme'
import {
  FlexBoxProps,
  SizingProps,
  SpacingProps
} from 'common/types/stylesProps'
import React, { ReactNode } from 'react'

import * as S from './styles'

export type BoxProps = {
  children: ReactNode
  bgColor?: keyof TypeColors
  color?: keyof TypeColors
} & FlexBoxProps &
  SizingProps &
  SpacingProps

export const Box = ({
  bgColor,
  width,
  minWidth,
  maxWidth,
  height,
  minHeight,
  maxHeight,
  margin,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  padding,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  children,
  flexDirection,
  flexWrap,
  justifyContent,
  alignItems,
  alignContent,
  order,
  flexGrow,
  flexShrink,
  alignSelf,
  gap
}: BoxProps) => {
  return (
    <S.Container
      {...{
        bgColor,
        width,
        minWidth,
        maxWidth,
        height,
        minHeight,
        maxHeight,
        margin,
        marginTop,
        marginBottom,
        marginLeft,
        marginRight,
        padding,
        paddingTop,
        paddingBottom,
        paddingLeft,
        paddingRight,
        flexDirection,
        flexWrap,
        justifyContent,
        alignItems,
        alignContent,
        order,
        flexGrow,
        flexShrink,
        alignSelf,
        gap
      }}
    >
      {children}
    </S.Container>
  )
}
