import { StoryObj, Meta } from '@storybook/react'
import { Rounded, RoundedProps } from './index'

export default {
  title: 'Components/Rounded',
  component: Rounded,
} as Meta

export type Story = StoryObj<typeof Rounded>

const Template = (args: RoundedProps) => <Rounded {...args} />

export const Default: Story = {
  render: Template,
  args: {
    children: <div style={{background: 'red', padding: 5}}>Content</div>,
  },
}
