import { device } from 'common/styles/device'
import styled, { css } from 'styled-components'

interface ContainerProps {
  reverse: boolean
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  max-width: 1170px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 3rem;

  ${device.sm} {
    flex-direction: row;
    ${({ reverse }) => (reverse ? 'flex-direction: row-reverse;' : '')}
  }
`

export const Button = styled.button`
  background-color: ${css`
    ${({ theme }) => theme.colors.blue2}
  `};
  max-width: 570px;
  height: 62px;
  width: 100%;
  border-radius: 8px;
  border: 0;
  cursor: pointer;
  margin: 16px 0;

  &:hover {
    box-shadow: 0px 0px 5px rgba(255, 255, 255, 0.5);
  }

  a {
    text-decoration: none;
  }
`
