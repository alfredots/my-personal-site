import { Box } from 'components/Box'
import { Image } from 'components/Image'
import { cursos, experiencias, formacoes } from './data'
import { Text } from 'components/Text'
import * as S from './styles'
import { ListItem } from './../../components/ListItem/index'
import { Header } from 'components/Header'

export const About = () => (
  <S.Wrapper>
    <S.HeaderContainer>
      <Header />
    </S.HeaderContainer>
    <S.MainContainer>
      <Box
        marginTop="2.4rem"
        width="100%"
        flexWrap="wrap-reverse"
        justifyContent={['center', 'center', 'space-between']}
      >
        <Box
          flexDirection="column"
          gap="28px"
          maxWidth="530px"
          width={['100%', '50%']}
          alignItems="center"
          justifyContent="center"
          marginTop={['2.4rem', '2.4rem', '0px']}
        >
          <Text variant="p-semibold" tag="p">
            Olá sou Alfredo Tito, bacharel em Ciências da Computação (UFMA).
            Desde 2018 atuando como Desenvolvedor atuando em projetos como a
            criação de uma bibliotecas para criação de histórias infantis até um
            sistema para acompanhamento nutricional de crianças. Atualmente
            trabalho mais focado para área Web e afins.
          </Text>
          <Text variant="p-semibold" tag="p">
            Sou um grande entusiasta de jogos eletrônicos, finanças, música
            coreana, exercícios físicos e atividades ao ar livre. Além disso,
            adoro estudar sobre interface do usuário e usabilidade sempre que
            possível estudo mais sobre pois auxilia muito no insight de ideias.
          </Text>
        </Box>
        <Box maxWidth="450px" margin="0 auto">
          <Image
            src="https://i.ibb.co/wrVfqZd/me.jpgg"
            width={450}
            height={520}
          />
        </Box>
      </Box>
      <Box
        width="100%"
        justifyContent="space-between"
        marginTop={['20px', '40px']}
        flexWrap="wrap"
      >
        <Box flexDirection="column" width={['100%', '50%']}>
          <Text variant="h1" tag="h1" fontSize="38px">
            Experiência
          </Text>
          {experiencias.map((item) => (
            <Box key={item.title} marginTop={['20px', '40px']}>
              <ListItem
                title={item.title}
                subtitle={item.subtitle}
                date={item.date}
              />
            </Box>
          ))}
        </Box>
        <Box
          flexDirection="column"
          width={['100%', '50%']}
          marginTop={['2rem', '0']}
        >
          <Text variant="h1" tag="h1" fontSize="38px">
            Educação
          </Text>
          {formacoes.map((item) => (
            <Box key={item.title} marginTop={['20px', '40px']}>
              <ListItem
                title={item.title}
                subtitle={item.subtitle}
                date={item.date}
              />
            </Box>
          ))}

          <Box marginTop={['20px', '40px']} flexDirection="column">
            <Text variant="h1" tag="h1" fontSize="38px">
              Cursos
            </Text>
            {cursos.map((item) => (
              <Box key={item.title} marginTop={['20px', '40px']}>
                <ListItem
                  title={item.title}
                  subtitle={item.subtitle}
                  date={item.date}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      <Box height="50px" />
    </S.MainContainer>
  </S.Wrapper>
)
