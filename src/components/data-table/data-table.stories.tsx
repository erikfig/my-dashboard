import { Meta, StoryObj } from '@storybook/react';
import { DataTable } from './index';

const meta: Meta<typeof DataTable> = {
  title: 'Components/DataTable/Default',
  component: DataTable,
  argTypes: {
    columns: {
      control: 'object',
    },
    rows: {
      control: 'object',
    },
    isLoading: {
      control: 'boolean',
    },
  },
};

export default meta;

type Story = StoryObj<typeof DataTable>;

const columns = [
  { title: 'ID', field: 'id' },
  { title: 'Name', field: 'name' },
  { title: 'Email', field: 'email' },
  { title: 'Views', field: 'views' },
];

const rows = [
  { id: 1, name: 'John Doe', email: 'john@example.com', views: 100 },
  { id: 2, name: 'Jane Doe', email: 'jane@example.com', views: 200 },
];

export const Default: Story = {
  args: {
    columns,
    rows,
    isLoading: false,
  },
};