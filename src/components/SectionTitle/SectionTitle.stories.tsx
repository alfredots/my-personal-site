import type { Meta, StoryObj } from '@storybook/react'

import { SectionTitle } from '.'

const meta: Meta<typeof SectionTitle> = {
  title: 'Example/SectionTitle',
  component: SectionTitle
}

export default meta
type Story = StoryObj<typeof SectionTitle>

export const Primary: Story = {}
