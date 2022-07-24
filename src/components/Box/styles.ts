import { device } from 'common/styles/device'
import { haveArrayProps } from 'common/styles/utils'
import styled, { css } from 'styled-components'
import { BoxProps } from '.'

type BoxStyleProps = Omit<BoxProps, 'children'>

export const Container = styled.div<BoxStyleProps>`
  ${({ width }) => !!width && `width:${haveArrayProps(width, 0)};`}
  ${({ maxWidth }) => !!maxWidth && `max-width:${maxWidth};`}
  ${({ minWidth }) => !!minWidth && `min-width:${minWidth};`}
  ${({ height }) => !!height && `height:${height};`}
  ${({ maxHeight }) => !!maxHeight && `max-height:${maxHeight};`}
  ${({ minHeight }) => !!minHeight && `min-height:${minHeight};`}
  ${({ margin }) => !!margin && `margin:${margin};`}
  ${({ marginTop }) =>
    !!marginTop && `margin-top:${haveArrayProps(marginTop, 0)};`}
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

  ${device.sm} {
    ${({ width }) => !!width && `width:${haveArrayProps(width, 1)};`}
    ${({ marginTop }) =>
      !!marginTop && `margin-top:${haveArrayProps(marginTop, 1)};`}
  }

  ${device.md} {
    ${({ width }) => !!width && `width:${haveArrayProps(width, 2)};`}
    ${({ marginTop }) =>
      !!marginTop && `margin-top:${haveArrayProps(marginTop, 2)};`}
  }

  ${device.lg} {
    ${({ width }) => !!width && `width:${haveArrayProps(width, 3)};`}
    ${({ marginTop }) =>
      !!marginTop && `margin-top:${haveArrayProps(marginTop, 3)};`}
  }

  ${device.xl} {
    ${({ width }) => !!width && `width:${haveArrayProps(width, 4)};`}
    ${({ marginTop }) =>
      !!marginTop && `margin-top:${haveArrayProps(marginTop, 4)};`}
  }
`
