import { TypeColors } from 'common/styles/theme'
import {
  BorderProps,
  FlexBoxProps,
  SizingProps,
  SpacingProps
} from 'common/types/stylesProps'
import React, { ReactNode } from 'react'

import * as S from './styles'

export type BoxProps = {
  children?: ReactNode
  bgColor?: keyof TypeColors
  color?: keyof TypeColors
} & FlexBoxProps &
  SizingProps &
  SpacingProps &
  BorderProps

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
  border,
  borderColor,
  borderRadius,
  borderStyle,
  borderWidth,
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
        border,
        borderColor,
        borderRadius,
        borderStyle,
        borderWidth,
        gap
      }}
    >
      {children}
    </S.Container>
  )
}
