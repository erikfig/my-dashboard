import { Meta, StoryObj } from '@storybook/react';
import { Card } from './default';
import { CardBackground } from './card-background';
import { CardStatus } from './card-status';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  // argTypes: {
  //   type: {
  //     options: ['div', 'section', 'article'],
  //     control: { type: 'radio' },
  //   },
  //   className: {
  //     control: 'text',
  //   },
  // },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: 'Default Card',
    type: 'div',
  },
};

export const WithBackground: Story = {
  render: (args) => (
    <Card>
      <CardBackground {...args} src="https://placehold.co/600x400/orange/white">
        Card with Background
      </CardBackground>
    </Card>
  ),
  args: {
    className: 'custom-class',
  },
};

export const StatusDanger: Story = {
  render: (args) => (
    <CardStatus {...args} title="Error" message="Something went wrong" status="danger" />
  ),
  args: {
    className: 'custom-class',
  },
};

export const StatusSuccess: Story = {
  render: (args) => (
    <CardStatus {...args} title="Success" message="Operation successful" status="success" />
  ),
  args: {
    className: 'custom-class',
  },
};

export const StatusWarning: Story = {
  render: (args) => (
    <CardStatus {...args} title="Warning" message="Be careful" status="warning" />
  ),
  args: {
    className: 'custom-class',
  },
};

export const StatusInfo: Story = {
  render: (args) => (
    <CardStatus {...args} title="Info" message="For your information" status="info" />
  ),
  args: {
    className: 'custom-class',
  },
};
