import { Meta, StoryObj } from '@storybook/react'
import { IButtonProps } from './types'
import Button from './Button'

export default {
  title: 'Components/Button',
  component: Button,
} as Meta<typeof Button>

const Template: StoryObj<IButtonProps> = (
  args: JSX.IntrinsicAttributes & IButtonProps
) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  disabled: false,
  callback: () => alert('Button clicked!'),
}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
  callback: () => alert('Button clicked!'),
}
