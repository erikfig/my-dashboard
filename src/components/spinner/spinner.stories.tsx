import { StoryObj, Meta } from '@storybook/react'
import { Spinner, SpinnerProps } from './index'

export default {
  title: 'Components/Spinner',
  component: Spinner,
} as Meta

export type Story = StoryObj<typeof Spinner>

const Template = (args: SpinnerProps) => <Spinner {...args} />

export const Default: Story = {
  render: Template,
  args: {
    width: 'w-8',
    height: 'h-8',
  },
}

export const Large: Story = {
  render: Template,
  args: {
    width: 'w-16',
    height: 'h-16',
  },
}

export const Small: Story = {
  render: Template,
  args: {
    width: 'w-4',
    height: 'h-4',
  },
}
