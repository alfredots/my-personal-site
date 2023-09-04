import type { Meta, StoryObj } from '@storybook/react'

import { SectionHero } from '.'

const meta: Meta<typeof SectionHero> = {
  title: 'Example/SectionHero',
  component: SectionHero
}

export default meta
type Story = StoryObj<typeof SectionHero>

export const Primary: Story = {}
