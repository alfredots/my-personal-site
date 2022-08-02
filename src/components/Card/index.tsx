import { Box } from 'components/Box'
import { Text } from 'components/Text'

export type CardProps = {
  img: string
  alt: string
  title: string
  text: string
}

export const Card = ({ img, alt, title, text }: CardProps) => {
  return (
    <Box
      width={['100%', '30%']}
      border="1px solid #B3B0B8"
      minHeight="372px"
      borderRadius="8px"
      padding="24px"
      flexDirection="column"
      gap="16px"
      margin="16px 0"
    >
      <img src={img} alt={alt} width="50px" height="50px" />
      <Text variant="h3" tag="h3" fontSize="30px" lineHeight="36px">
        {title}
      </Text>
      <Text variant="p1-regular" tag="p" fontSize="16px" lineHeight="28px">
        {text}
      </Text>
    </Box>
  )
}
