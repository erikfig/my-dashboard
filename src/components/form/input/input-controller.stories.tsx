import { Meta, StoryObj } from '@storybook/react';
import { useForm, FormProvider } from 'react-hook-form';
import { InputController, InputControllerProps } from './input-controller';

const meta: Meta<typeof InputController> = {
  title: 'Components/Form/Input/Controller',
  component: InputController,
  argTypes: {
    name: {
      control: { type: 'text' },
      description: 'Nome do campo de entrada',
    },
    size: {
      control: { type: 'number' },
      description: 'Tamanho do campo de entrada',
    },
    errors: {
      control: { type: 'object' },
      description: 'Objeto de erros do formulário',
    },
  },
};

export default meta;

type Story = StoryObj<typeof InputController>;

const Template = (args: InputControllerProps) => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <InputController {...args} control={methods.control} />
    </FormProvider>
  );
};

export const Default: Story = {
  render: Template,
  args: {
    name: 'input-text',
    label: 'Field text',
    placeholder: 'Field with HTML props support',
    helpText: 'This component supports all HTML Input properties of native HTML 5',
    errors: {},
  }
};

export const WithError = {
  render: Template,
  args: {
    name: 'input-text-error',
    label: 'Field text with error validation',
    placeholder: 'Field with error',
    helpText: 'Error validation message',
    errors: {
      'input-text-error': {
        message: 'This field has an error',
      },
    },
  }
};