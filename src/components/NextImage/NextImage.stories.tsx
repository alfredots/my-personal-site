import type { Meta, StoryObj } from '@storybook/react'
import perfilImage from 'assets/perfil.png'

import { NextImage } from '.'

const meta: Meta<typeof NextImage> = {
  title: 'Example/NextImage',
  component: NextImage,
  args: {
    src: perfilImage
  }
}

export default meta
type Story = StoryObj<typeof NextImage>

export const Primary: Story = {}
