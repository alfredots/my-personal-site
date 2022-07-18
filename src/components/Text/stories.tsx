import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Text } from './index'
import { theme } from '../../common/styles/theme'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Text',
  component: Text,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    color: {
      control: 'select',
      options: Object.keys(theme.colors)
    }
  }
} as ComponentMeta<typeof Text>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Text> = (args) => (
  <Text {...args}>texto teste</Text>
)

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  tag: 'p',
  variant: 'p1-regular',
  color: 'black2'
}
