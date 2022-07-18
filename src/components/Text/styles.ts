import { TypeColors } from 'common/styles/theme'
import styled, { css } from 'styled-components'

interface TextProps {
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
  fontFamily: 'spaceGrotesk' | 'inter'
  color: keyof TypeColors
}

export const Container = styled.div<TextProps>`
  ${({ variant }) =>
    variant === 'display' &&
    css(
      ({ theme }) =>
        `
        font-family: ${theme.fontFamily.spaceGrotesk};
        font-size: ${theme.sizing['70px']};
        line-height: 78px;
        font-weight: ${theme.fontWeight['700']};
      `
    )}

  ${({ variant }) =>
    variant === 'h1' &&
    css(
      ({ theme }) =>
        `
        font-family: ${theme.fontFamily.spaceGrotesk};
        font-size: ${theme.sizing['38px']};
        line-height: 46px;
        font-weight: ${theme.fontWeight['700']};
      `
    )}

  ${({ variant }) =>
    variant === 'h2' &&
    css(
      ({ theme }) =>
        `
        font-family: ${theme.fontFamily.spaceGrotesk};
        font-size: ${theme.sizing['34px']};
        line-height: 44px;
        font-weight: ${theme.fontWeight['700']};
      `
    )}

  ${({ variant }) =>
    variant === 'h3' &&
    css(
      ({ theme }) =>
        `
        font-family: ${theme.fontFamily.spaceGrotesk};
        font-size: ${theme.sizing['30px']};
        line-height: 36px;
        font-weight: ${theme.fontWeight['700']};
      `
    )}

  ${({ variant }) =>
    variant === 'h4' &&
    css(
      ({ theme }) =>
        `
        font-family: ${theme.fontFamily.spaceGrotesk};
        font-size: ${theme.sizing['24px']};
        line-height: 28px;
        font-weight: ${theme.fontWeight['700']};
      `
    )}

  ${({ variant }) =>
    variant === 'p1-regular' &&
    css(
      ({ theme }) =>
        `
        font-family: ${theme.fontFamily.inter};
        font-size: ${theme.sizing['20px']};
        line-height: 30px;
        font-weight: ${theme.fontWeight['400']};
      `
    )}

  ${({ variant }) =>
    variant === 'p1-semibold' &&
    css(
      ({ theme }) =>
        `
        font-family: ${theme.fontFamily.inter};
        font-size: ${theme.sizing['20px']};
        line-height: 30px;
        font-weight: ${theme.fontWeight['600']};
      `
    )}

  ${({ variant }) =>
    variant === 'p2' &&
    css(
      ({ theme }) =>
        `
        font-family: ${theme.fontFamily.inter};
        font-size: ${theme.sizing['18px']};
        line-height: 22px;
        font-weight: ${theme.fontWeight['400']};
      `
    )}

  ${({ variant }) =>
    variant === 'p3' &&
    css(
      ({ theme }) =>
        `
        font-family: ${theme.fontFamily.inter};
        font-size: ${theme.sizing['16px']};
        line-height: 18px;
        font-weight: ${theme.fontWeight['400']};
      `
    )}

  ${({ variant }) =>
    variant === 'p4' &&
    css(
      ({ theme }) =>
        `
        font-family: ${theme.fontFamily.inter};
        font-size: ${theme.sizing['14px']};
        line-height: 18px;
        font-weight: ${theme.fontWeight['400']};
      `
    )}

  ${({ variant }) =>
    variant === 'p4' &&
    css(
      ({ theme }) =>
        `
        font-family: ${theme.fontFamily.inter};
        font-size: ${theme.sizing['12px']};
        line-height: 18px;
        font-weight: ${theme.fontWeight['400']};
      `
    )}

  ${({ color }) => css(({ theme }) => `color: ${theme.colors[color]}`)}
`
