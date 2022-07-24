import { Box } from 'components/Box'
import { Text } from 'components/Text'

export const SocialMedia = () => {
  return (
    <Box flexDirection="column" gap="24px" alignItems="center">
      <Text variant="p1-regular" tag="h3" color="white" fontSize="2rem">
        Me siga nas redes sociais:
      </Text>
      <Box gap="29px">
        <a
          href="https://www.instagram.com/garotocaos_/"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/img/home/instagram-icon.svg" alt="instagram icone" />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=5598991783538"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/img/home/whats-icon.svg" alt="whats icone" />
        </a>
        <a
          href="https://www.linkedin.com/in/alfredo-tito-837429ba/"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/img/home/linkedin-icon.svg" alt="linkedin icone" />
        </a>
      </Box>
    </Box>
  )
}
