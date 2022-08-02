import { Box } from 'components/Box'
import { Text } from 'components/Text'

export type ListItemProps = {
  title: string
  subtitle: string
  date: string
}

export const ListItem = ({ title, subtitle, date }: ListItemProps) => {
  return (
    <Box flexDirection="column">
      <Text variant="h4" tag="h4">
        {title}
      </Text>
      <Text variant="p-semibold" tag="p">
        {subtitle}
      </Text>
      <Text variant="p-regular" tag="span" fontSize="1.6rem">
        {date}
      </Text>
    </Box>
  )
}
