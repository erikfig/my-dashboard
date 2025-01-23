import { StoryObj, Meta } from '@storybook/react'
import { Pagination, PaginationProps } from './index'

export default {
  title: 'Components/Pagination',
  component: Pagination,
  argTypes: {
    onChange: { action: 'changed' },
  },
} as Meta

export type Story = StoryObj<typeof Pagination>

const Template = (args: PaginationProps) => <Pagination {...args} />

export const Default: Story = {
  render: Template,
  args: {
    current: 1,
    perPage: 10,
    total: 100,
    count: 10,
    disabled: false,
  },
}

export const Disabled: Story = {
  render: Template,
  args: {
    current: 1,
    perPage: 10,
    total: 100,
    count: 10,
    disabled: true,
  },
}
