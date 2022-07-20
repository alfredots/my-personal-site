import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Box } from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Box',
  component: Box
} as ComponentMeta<typeof Box>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Box> = (args) => (
  <Box {...args}>texto teste</Box>
)

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  width: '100px',
  height: '100px',
  bgColor: 'blue2',
  color: 'white',
  flexDirection: 'column'
}
