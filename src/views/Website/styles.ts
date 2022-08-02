import styled, { css } from 'styled-components'
export const Wrapper = styled.main`
  background-color: ${({ theme }) => theme.colors.black1};
  color: #fff;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  overflow: auto;
`

export const MainContainer = styled.section`
  max-width: 1170px;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 0 1rem;
  @media (min-width: 1024px) {
    padding: 0 1rem;
  }
`

export const Button = styled.button`
  background-color: ${css`
    ${({ theme }) => theme.colors.blue2}
  `};
  max-width: 470px;
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
