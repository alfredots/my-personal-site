import { device } from 'common/styles/device'
import { haveArrayProps } from 'common/styles/utils'
import styled, { css } from 'styled-components'
import { TextProps } from './index'

type TextStyledProps = Omit<TextProps, 'children' | 'tag'>

export const Container = styled.div<TextStyledProps>`
  ${({ variant }) =>
    variant === 'display' &&
    css(
      ({ theme }) =>
        `
        font-family: ${theme.fontFamily.spaceGrotesk};
        font-size: 7rem;
        line-height: 7.8rem;
        font-weight: ${theme.fontWeight['700']};
      `
    )}

  ${({ variant }) =>
    variant === 'h1' &&
    css(
      ({ theme }) =>
        `
        font-family: ${theme.fontFamily.spaceGrotesk};
        font-size: 3rem;
        line-height: 4rem;
        font-weight: ${theme.fontWeight['700']};

        ${device.sm} {
          font-size: 3.4rem;
          line-height: 4rem;
        }

        ${device.lg} {
          font-size: 5rem;
          line-height: 5.9rem;
        }
      `
    )}

  ${({ variant }) =>
    variant === 'h2' &&
    css(
      ({ theme }) =>
        `
        font-family: ${theme.fontFamily.spaceGrotesk};
        font-size: 2.8rem;
        line-height: 4rem;
        font-weight: ${theme.fontWeight['700']};

        ${device.sm} {
          font-size: 3rem;
          line-height: 4rem;
        }

        ${device.lg} {
          font-size: 4.6rem;
          line-height: 5.5rem;
        }
      `
    )}

  ${({ variant }) =>
    variant === 'h3' &&
    css(
      ({ theme }) =>
        `
        font-family: ${theme.fontFamily.spaceGrotesk};
        font-size: 2.6rem;
        line-height: 4rem;
        font-weight: ${theme.fontWeight['700']};

        ${device.sm} {
          font-size: 2.8rem;
          line-height: 4rem;
        }

        ${device.lg} {
          font-size: 4.2rem;
          line-height: 5.1rem;
        }
      `
    )}

  ${({ variant }) =>
    variant === 'h4' &&
    css(
      ({ theme }) =>
        `
        font-family: ${theme.fontFamily.spaceGrotesk};
        font-size: 2.4rem;
        line-height: 4rem;
        font-weight: ${theme.fontWeight['700']};

        ${device.sm} {
          font-size: 2.6rem;
          line-height: 4rem;
        }

        ${device.lg} {
          font-size: 3rem;
          line-height: 4.2rem;
        }
      `
    )}

  ${({ variant }) =>
    variant === 'p-regular' &&
    css(
      ({ theme }) =>
        `
        font-family: ${theme.fontFamily.inter};
        font-size: 1.6rem;
        line-height: 2.4rem;
        font-weight: ${theme.fontWeight['400']};

        ${device.sm} {
          font-size: 1.8rem;
          line-height: 2.4rem;
        }

        ${device.lg} {
          font-size: 2rem;
          line-height: 2.8rem;
        }
      `
    )}

  ${({ variant }) =>
    variant === 'p-semibold' &&
    css(
      ({ theme }) =>
        `
        font-family: ${theme.fontFamily.inter};
        font-size: 1.6rem;
        line-height: 2.8rem;
        font-weight: ${theme.fontWeight['600']};

        ${device.sm} {
          font-size: 1.8rem;
          line-height: 2.8rem;
        }

        ${device.lg} {
          font-size: 2rem;
          line-height: 3rem;
        }
      `
    )}

  ${({ color }) => css(({ theme }) => `color: ${theme.colors[color]};`)}
  ${({ fontSize }) => fontSize && `font-size: ${haveArrayProps(fontSize, 0)};`}
  ${({ lineHeight }) =>
    lineHeight && `line-height: ${haveArrayProps(lineHeight, 0)};`}
  ${({ textAlign }) =>
    textAlign && `text-align: ${haveArrayProps(textAlign, 0)};`}
  ${({ cursor }) => cursor && `cursor: ${cursor};`}


  ${device.sm} {
    ${({ fontSize }) =>
      fontSize && `font-size: ${haveArrayProps(fontSize, 1)};`}

    ${({ lineHeight }) =>
      lineHeight && `line-height: ${haveArrayProps(lineHeight, 1)};`}

    ${({ textAlign }) =>
      textAlign && `text-align: ${haveArrayProps(textAlign, 1)};`}
  }

  ${device.md} {
    ${({ fontSize }) =>
      fontSize && `font-size: ${haveArrayProps(fontSize, 2)};`}

    ${({ lineHeight }) =>
      lineHeight && `line-height: ${haveArrayProps(lineHeight, 2)};`}

    ${({ textAlign }) =>
      textAlign && `text-align: ${haveArrayProps(textAlign, 2)};`}
  }
`
