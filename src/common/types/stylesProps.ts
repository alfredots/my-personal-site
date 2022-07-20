export type SizingProps = {
  width?: string
  minWidth?: string
  maxWidth?: string
  height?: string
  minHeight?: string
  maxHeight?: string
}

export type SpacingProps = {
  margin?: string
  marginTop?: string
  marginBottom?: string
  marginLeft?: string
  marginRight?: string
  padding?: string
  paddingTop?: string
  paddingBottom?: string
  paddingLeft?: string
  paddingRight?: string
}

export type FlexBoxProps = {
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse'
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse'
  justifyContent?:
    | 'start'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
  alignItems?: 'stretch' | 'center' | 'start' | 'end'
  alignContent?: 'start' | 'center' | 'space-between' | 'space-around'
  order?: number
  flexGrow?: number
  flexShrink?: number
  alignSelf?: 'stretch' | 'center' | 'start' | 'end'
  gap?: string
}
