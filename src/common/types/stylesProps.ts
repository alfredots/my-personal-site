export type SizingProps = {
  width?: string | string[]
  minWidth?: string
  maxWidth?: string | string[]
  height?: string
  minHeight?: string
  maxHeight?: string
}

export type SpacingProps = {
  margin?: string
  marginTop?: string[] | string
  marginBottom?: string
  marginLeft?: string
  marginRight?: string
  padding?: string
  paddingTop?: string
  paddingBottom?: string
  paddingLeft?: string
  paddingRight?: string
}

export type BorderProps = {
  border?: string
  borderRadius?: string
  borderColor?: string
  borderWidth?: string
  borderStyle?: string
}

type justifyContentProps =
  | 'flex-start'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'

export type FlexBoxProps = {
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse'
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse'
  justifyContent?: justifyContentProps[] | justifyContentProps
  alignItems?: 'stretch' | 'center' | 'start' | 'end'
  alignContent?: 'start' | 'center' | 'space-between' | 'space-around'
  order?: number
  flexGrow?: number
  flexShrink?: number
  alignSelf?: 'stretch' | 'center' | 'start' | 'end'
  gap?: string
}
