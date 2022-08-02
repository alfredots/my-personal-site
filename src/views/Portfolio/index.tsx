import { Box } from 'components/Box'
import { Header } from 'components/Header'
import { Image } from 'components/Image'
import { Text } from 'components/Text'
import * as S from './styles'
import { projects } from './data'
import { ProjectItem } from 'components/ProjectItem'

export const Portfolio = () => (
  <S.Wrapper>
    <S.HeaderContainer>
      <Header />
    </S.HeaderContainer>
    <S.MainContainer>
      <Box
        flexDirection="column"
        width="100%"
        marginTop={['2.4rem', '4.8rem', '6.4rem']}
      >
        <Text tag="h3" variant="h3" color="white">
          Portfólio
        </Text>
        <Text tag="p" variant="p-semibold" color="white">
          Alguns projetos em que trabalhei ou contribuí de alguma forma.
        </Text>
        <Box marginTop="2.4rem" maxWidth="80rem">
          <Text tag="p" variant="p-regular" color="white">
            Ao longo dos anos tenho criado experiências funcionais, agradáveis
            ​​e valiosas que deixam um impacto positivo nas pessoas e nos
            negócios. Além disso, buscado me aprimorar por meio deles.
          </Text>
        </Box>
      </Box>

      <Box
        flexDirection="column"
        alignItems="center"
        marginTop="5.6rem"
        gap="7.2rem"
      >
        {projects.map((project, index) => (
          <ProjectItem
            key={project.name}
            name={project.name}
            link={project.link}
            img={project.img}
            description={project.description}
            reverse={(index + 1) % 2 === 0}
          />
        ))}
      </Box>
      <Box height="30px" />
    </S.MainContainer>
  </S.Wrapper>
)
