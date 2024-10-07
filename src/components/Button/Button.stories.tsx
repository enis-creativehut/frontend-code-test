import { Meta, StoryFn } from '@storybook/react'
import { ButtonProps } from './types'
import Button from './Button'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    callback: { action: 'clicked' },
  },
} as Meta<typeof Button>

const Template: StoryFn<ButtonProps> = (args) => (
  <div style={{ margin: 30 }}>
    <Button {...args} />
  </div>
)

export const PrimarySolid = Template.bind({})
PrimarySolid.args = {
  variant: 'primary',
  title: 'Button',
  disabled: false,
  callbackFn: () => alert('Button clicked!'),
}

export const SecondarySolid = Template.bind({})
SecondarySolid.args = {
  variant: 'secondary',
  title: 'Button',
  disabled: false,
  callbackFn: () => alert('Button clicked!'),
}

export const PrimaryOutline = Template.bind({})
PrimaryOutline.args = {
  variant: 'primary-outline',
  title: 'Button',
  disabled: false,
  callbackFn: () => alert('Button clicked!'),
}

export const SecondaryOutline = Template.bind({})
SecondaryOutline.args = {
  variant: 'secondary-outline',
  title: 'Button',
  disabled: false,
  callbackFn: () => alert('Button clicked!'),
}
