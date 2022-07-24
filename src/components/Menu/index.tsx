import { Box } from 'components/Box'
import { Text } from 'components/Text'
import { useRouter } from 'next/router'

import * as S from './styles'

export const Menu = () => {
  const router = useRouter()

  const goTo = (path: string) => router.push(path)

  return (
    <Box height="36px" alignContent="center" justifyContent="center">
      <Text
        variant="h3"
        tag="h3"
        lineHeight="33px"
        cursor="pointer"
        onClick={() => goTo('/')}
      >
        Início
      </Text>
      <S.Divider />
      <Text
        variant="h3"
        tag="h3"
        cursor="pointer"
        lineHeight="33px"
        onClick={() => goTo('/sobre')}
      >
        Sobre
      </Text>
      <S.Divider />
      <Text
        variant="h3"
        tag="h3"
        cursor="pointer"
        lineHeight="33px"
        onClick={() => goTo('/portfolio')}
      >
        Portfolio
      </Text>
    </Box>
  )
}
