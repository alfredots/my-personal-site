import styled, { css } from 'styled-components'
import { BoxProps } from '.'

type BoxStyleProps = Omit<BoxProps, 'children'>

export const Container = styled.div<BoxStyleProps>`
  ${({ width }) => !!width && `width:${width};`}
  ${({ maxWidth }) => !!maxWidth && `max-width:${maxWidth};`}
  ${({ minWidth }) => !!minWidth && `min-width:${minWidth};`}
  ${({ height }) => !!height && `height:${height};`}
  ${({ maxHeight }) => !!maxHeight && `max-height:${maxHeight};`}
  ${({ minHeight }) => !!minHeight && `min-height:${minHeight};`}
  ${({ margin }) => !!margin && `margin:${margin};`}
  ${({ marginTop }) => !!marginTop && `margin-top:${marginTop};`}
  ${({ marginBottom }) => !!marginBottom && `margin-bottom:${marginBottom};`}
  ${({ marginLeft }) => !!marginLeft && `margin-left:${marginLeft};`}
  ${({ marginRight }) => !!marginRight && `margin-right:${marginRight};`}
  ${({ padding }) => !!padding && `padding:${padding};`}
  ${({ paddingTop }) => !!paddingTop && `padding-top:${paddingTop};`}
  ${({ paddingBottom }) =>
    !!paddingBottom && `padding-bottom:${paddingBottom};`}
  ${({ paddingLeft }) => !!paddingLeft && `padding-left:${paddingLeft};`}
  ${({ paddingRight }) => !!paddingRight && `padding-right:${paddingRight};`}
  ${({ flexDirection }) =>
    !!flexDirection && `flex-direction:${flexDirection};`}
  ${({ flexWrap }) => !!flexWrap && `flex-wrap:${flexWrap};`}
  ${({ justifyContent }) =>
    !!justifyContent && `justify-content:${justifyContent};`}
  ${({ alignItems }) => !!alignItems && `align-items:${alignItems};`}
  ${({ alignContent }) => !!alignContent && `align-content:${alignContent};`}
  ${({ order }) => !!order && `order:${order};`}
  ${({ flexGrow }) => !!flexGrow && `flex-grow:${flexGrow};`}
  ${({ flexShrink }) => !!flexShrink && `flex-shrink:${flexShrink};`}
  ${({ alignSelf }) => !!alignSelf && `align-self:${alignSelf};`}
  ${({ gap }) => !!gap && `gap:${gap};`}

  ${({ bgColor }) =>
    bgColor &&
    css(
      ({ theme }) =>
        `
        background-color:${theme.colors[bgColor]};
        `
    )}

${({ color }) =>
    color &&
    css(
      ({ theme }) =>
        `
        color:${theme.colors[color]};
        `
    )}

  display: flex;
`
