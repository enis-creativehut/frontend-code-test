import { Meta, StoryFn } from '@storybook/react'
import { IButtonProps } from './types'
import Button from './Button'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    callback: { action: 'clicked' }, // Handles callback actions
  },
} as Meta<typeof Button>

const Template: StoryFn<IButtonProps> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  startIcon: true,
  title: 'Button',
  disabled: false,
}

export const Secondary = Template.bind({})
Secondary.args = {
  variant: 'secondary-solid',
  startIcon: true,
  title: 'Button',
  disabled: false,
}
