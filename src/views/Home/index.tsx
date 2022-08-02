import { Box } from 'components/Box'
import { Header } from 'components/Header'
import { Image } from 'components/Image'
import { SocialMedia } from 'components/SocialMedia'
import { Text } from 'components/Text'
import * as S from './styles'

export const Home = () => (
  <S.Wrapper>
    <S.HeaderContainer>
      <Header />
    </S.HeaderContainer>
    <S.MainContainer>
      <Box
        flexDirection="column"
        alignItems="center"
        justifyContent={['flex-start', 'center']}
      >
        <Box marginTop="2.4rem">
          <Image
            src="https://i.ibb.co/RQC5GJy/1582584228526-1.jpg"
            width={180}
            height={180}
          />
        </Box>
        <Box marginTop="2.4rem">
          <Text
            tag="h2"
            variant="h2"
            textAlign={['center', 'left']}
            color="white"
          >
            Olá, meu nome é Alfredo Tito
          </Text>
        </Box>
        <Box maxWidth="755px" width="100%" marginTop="2.4rem">
          <Text
            tag="p"
            variant="p-regular"
            color="white"
            textAlign={['center', 'left']}
          >
            Meu objetivo pessoal é impulsionar o mundo criando uma ponte entre
            as pessoas e a tecnologia. Atualmente moro em São Luís, Brasil.
            Tenho me dedicado a explorar as tecnologias criando variados
            projetos e soluções.
          </Text>
        </Box>
        <Box marginTop={['4.8rem', '2.4rem']} marginBottom="2.4rem">
          <SocialMedia />
        </Box>
      </Box>
    </S.MainContainer>
  </S.Wrapper>
)
