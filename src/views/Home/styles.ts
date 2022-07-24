import styled from 'styled-components'
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
  max-width: 1440px;
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
