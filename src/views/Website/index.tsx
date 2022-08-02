import { Box } from 'components/Box'
import { Image } from 'components/Image'
import { Text } from 'components/Text'
import * as S from './styles'
import { contents } from './data'
import { Card } from 'components/Card'

export const Website = () => (
  <S.Wrapper>
    <S.MainContainer>
      <Box marginTop={['24px', '64px']} gap="26px" flexWrap="wrap-reverse">
        <Box
          flexDirection="column"
          gap="28px"
          maxWidth="600px"
          alignItems="start"
          justifyContent="center"
          marginTop={['24px', '0px']}
        >
          <Text variant="h4" tag="h4">
            Por que ter um site?
          </Text>
          <Text variant="p-regular" tag="p">
            Se você ainda questiona por que uma empresa precisa ter um site,
            reflita: você conhece alguma marca de sucesso que não tenha um site
            próprio? Independentemente do segmento, local ou tamanho, esse é o
            denominador comum entre todos os negócios de sucesso. Ter um site
            próprio é a presença digital mínima de que sua empresa precisa.
          </Text>
        </Box>
        <Box maxWidth="460px">
          <Image
            src="https://i.ibb.co/gdPcMPZ/image-2.jpg"
            width={690}
            height={460}
          />
        </Box>
      </Box>
      <Box
        flexDirection="column"
        width="100%"
        maxWidth="1086px"
        marginTop="48px"
      >
        <Text variant="h4" tag="h4">
          Como faço para ter um site?
        </Text>
        <Text variant="p-semibold" tag="p">
          É simples e fácil! Deixe tudo conosco, Desde Hospedar, Criar e
          Publicar seu site na Internet.
        </Text>
      </Box>
      <Box maxWidth="1086px" justifyContent="space-between" flexWrap="wrap">
        {contents.map((item) => (
          <Card
            key={item.title}
            img={item.img}
            alt={item.alt}
            title={item.title}
            text={item.text}
          />
        ))}
      </Box>
      <Box flexDirection="column" margin="16px 0" alignItems="center">
        <Text
          tag="h3"
          variant="h3"
          fontSize={['24px', '40px']}
          lineHeight="59px"
        >
          Vamos realizar esse projeto?
        </Text>

        <S.Button>
          <a
            href="https://api.whatsapp.com/send?phone=5598991783538"
            target="_blank"
            rel="noreferrer"
          >
            <Text tag="h4" variant="h4">
              Entrar em contato
            </Text>
          </a>
        </S.Button>
      </Box>
      <Box height="30px" />
    </S.MainContainer>
  </S.Wrapper>
)
