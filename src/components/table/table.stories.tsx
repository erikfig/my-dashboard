import { StoryObj, Meta } from '@storybook/react'
import { Table, TableProps } from './index'

export default {
  title: 'Components/Table',
  component: Table,
} as Meta

export type Story = StoryObj<typeof Table>

const Template = (args: TableProps) => <Table {...args} />

export const Default: Story = {
  render: Template,
  args: {
    columns: [
      { title: 'Nome', field: 'name' },
      { title: 'Idade', field: 'age' },
      { title: 'Endereço', field: 'address' },
    ],
    rows: [
      { name: 'João', age: 28, address: 'Rua A' },
      { name: 'Maria', age: 22, address: 'Rua B' },
      { name: 'Pedro', age: 35, address: 'Rua C' },
    ],
    isLoading: false,
  },
}

export const Loading: Story = {
  render: Template,
  args: {
    columns: [
      { title: 'Nome', field: 'name' },
      { title: 'Idade', field: 'age' },
      { title: 'Endereço', field: 'address' },
    ],
    isLoading: true,
  },
}

export const Empty: Story = {
  render: Template,
  args: {
    columns: [
      { title: 'Nome', field: 'name' },
      { title: 'Idade', field: 'age' },
      { title: 'Endereço', field: 'address' },
    ],
    rows: [],
    isLoading: false,
  },
}
