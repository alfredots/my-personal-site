import type { Meta, StoryObj } from '@storybook/react'

import { AboutMeSection } from '.'

const meta: Meta<typeof AboutMeSection> = {
  title: 'Example/AboutMeSection',
  component: AboutMeSection
}

export default meta
type Story = StoryObj<typeof AboutMeSection>

export const Primary: Story = {}
