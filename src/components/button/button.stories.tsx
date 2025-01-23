import { Meta, StoryObj } from '@storybook/react';
import { Button } from './index';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    type: {
      options: ['button', 'submit', 'reset'],
      control: { type: 'radio' },
    },
    color: {
      options: [
        'bg-primary',
        'bg-secondary',
        'bg-success',
        'bg-danger',
        'bg-warning',
        'bg-info',
        'bg-light',
        'bg-dark',
        'bg-orange-500',
        'bg-emerald-500',
        'bg-cyan-500',
        'bg-rose-500',
        'bg-lime-500',
        'bg-fuchsia-500',
      ],
      control: { type: 'select' },
      description: 'Aceita as cores listadas e qualquer outra da paleta do Tailwind CSS. [Documentação da paleta](https://tailwindcss.com/docs/customizing-colors)',
    },
    isLoading: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Default Button',
    type: 'button',
    isLoading: false,
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary',
    type: 'button',
    color: 'bg-secondary',
    isLoading: false,
  },
};

export const Loading: Story = {
  args: {
    children: 'Loading Button',
    type: 'button',
    isLoading: true,
  },
};
