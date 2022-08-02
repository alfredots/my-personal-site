import styled from 'styled-components'
export const Wrapper = styled.main`
  background-color: ${({ theme }) => theme.colors.black1};
  color: #fff;
  width: 100%;
  height: 100%;

  overflow: auto;
`
export const HeaderContainer = styled.div`
  margin-top: 2.4rem;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const MainContainer = styled.section`
  max-width: 1170px;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
  padding: 0 1rem;
  @media (min-width: 1024px) {
    padding: 0 1rem;
  }
`
