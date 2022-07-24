import { Box } from 'components/Box'
import { Image } from 'components/Image'
import { Menu } from 'components/Menu'
import { SocialMedia } from 'components/SocialMedia'
import { Text } from 'components/Text'
import * as S from './styles'

export const Home = () => (
  <S.Wrapper>
    <S.MainContainer>
      <Box marginTop={['24px', '64px']}>
        <Menu />
      </Box>
      <Box marginTop={['48px', '48px', '8%']}>
        <Image
          src="https://i.ibb.co/RQC5GJy/1582584228526-1.jpg"
          width={180}
          height={180}
        />
      </Box>
      <Box marginTop="48px">
        <Text
          tag="h1"
          variant="h1"
          lineHeight={['42px', '59px']}
          fontSize={['3.488rem', '3.125rem', '5rem']}
          textAlign={['center', 'left']}
          color="white"
        >
          Olá, meu nome é Alfredo Tito
        </Text>
      </Box>
      <Box
        maxWidth="1200px"
        width={['335px', '95%', '90%', '100%']}
        marginTop="48px"
      >
        <Text
          tag="p"
          variant="p1-regular"
          lineHeight={['24px', '35px']}
          fontSize={['1.8rem', '2.65rem']}
          color="white"
          textAlign={['center', 'left']}
        >
          Meu objetivo pessoal é impulsionar o mundo criando uma ponte entre as
          pessoas e a tecnologia. Atualmente moro em São Luís, Brasil. Tenho me
          dedicado a explorar as tecnologias criando variados projetos e
          soluções.
        </Text>
      </Box>
      <Box marginTop={['24px', '48px']}>
        <SocialMedia />
      </Box>
    </S.MainContainer>
  </S.Wrapper>
)
