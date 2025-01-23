import { Meta, StoryObj } from '@storybook/react';
import { DataTable, DataTableAsync } from './index';
import { ExampleRequest } from '@hooks/example-request';

const meta: Meta<typeof DataTable> = {
  title: 'Components/DataTable/Async',
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

const columns = [
  { title: 'ID', field: 'id' },
  { title: 'Name', field: 'name' },
  { title: 'Email', field: 'email' },
  { title: 'Views', field: 'views' },
];

export const Default: StoryObj<typeof DataTableAsync> = {
  render: (args) => {
    const { query, setPage } = ExampleRequest();
    return <DataTableAsync {...args} query={query} columns={columns} onChange={(p) => setPage(p)} />;
  },
  args: {
    columns,
  },
};
