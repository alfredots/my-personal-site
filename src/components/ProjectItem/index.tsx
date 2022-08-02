import { Box } from 'components/Box'
import { Image } from 'components/Image'
import { Text } from 'components/Text'
import * as S from './styles'

interface ProjectItemProps {
  name: string
  link: string
  img: string
  description: string
  reverse?: boolean
}

export const ProjectItem = ({
  name,
  link,
  img,
  description,
  reverse = false
}: ProjectItemProps) => {
  return (
    <S.Container reverse={reverse}>
      <Image src={img} width={570} height={370} />
      <Box
        maxWidth={['100%', '50%']}
        width="100%"
        flexDirection="column"
        gap="2.4rem"
      >
        <Text tag="h4" variant="h4">
          {name}
        </Text>
        <Text tag="p" variant="p-regular">
          {description}
        </Text>
        <S.Button>
          <a href={link} target="_blank" rel="noreferrer">
            <Text tag="h4" variant="h4">
              Ver projeto
            </Text>
          </a>
        </S.Button>
      </Box>
    </S.Container>
  )
}
