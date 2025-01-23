import { StoryObj, Meta } from '@storybook/react';
import { Input, InputProps } from './input';
import { ChangeEventHandler, useState } from 'react'
export default {
  title: 'Components/Form/Input',
  component: Input,
  argTypes: {
    type: {
      options: ['text', 'password', 'date', 'datetime-local', 'file', 'checkbox'],
    },
    onChange: { action: 'changed' },
  },
} as Meta;

export type Story = StoryObj<typeof Input>;

const Template = (args: InputProps) => {
  const [value, setValue] = useState(args.value);

  const handleChange:ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
    if (args && args.onChange) args.onChange(e);
  };

  return <Input {...args} value={value} onChange={handleChange} />;
};

export const Text: Story = {
  render: Template,
  args: {
    name: 'input-text',
    label: 'Text Input',
    placeholder: 'Enter text',
  },
};

export const Password: Story = {
  render: Template,
  args: {
    name: 'input-password',
    label: 'Password Input',
    type: 'password',
    value: '123456', 
  },
};

export const Date: Story = {
  render: Template,
  args: {
    name: 'input-date',
    label: 'Date Input',
    type: 'date',
  },
};

export const DateTime: Story = {
  render: Template,
  args: {
    name: 'input-datetime',
    label: 'Date Time Input',
    type: 'datetime-local',
  },
};

export const Checkbox: Story = {
  render: (args: InputProps) => {
    const [value, setValue] = useState(args.value);

    const handleChange:ChangeEventHandler<HTMLInputElement> = (e) => {
      const newValue = e.target.value;
      if (Array.isArray(value)) {
        if (value.includes(newValue)) {
          setValue(value.filter((item) => item !== newValue));
        } else {
          setValue([...value, newValue]);
        }
      } else {
        setValue(newValue);
      }
    };

    return <Input {...args} value={value} onChange={handleChange} />;
  },
  args: {
    name: 'input-checkbox',
    label: 'Checkbox Input',
    type: 'checkbox',
    value: ['option1', 'option2'],
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
    ],
  },
};

export const Radio: Story = {
  render: Template,
  args: {
    name: 'input-radio',
    label: 'Radio Input',
    type: 'radio',
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
    ],
  },
};

export const Select: Story = {
  render: Template,
  args: {
    name: 'input-select',
    label: 'Select Input',
    type: 'select',
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
    ],
  },
};

export const Textarea: Story = {
  render: Template,
  args: {
    name: 'input-textarea',
    label: 'Textarea Input',
    type: 'textarea',
    rows: 4,
  },
};

export const Toggle: Story = {
  render: Template,
  args: {
    name: 'input-toggle',
    label: 'Toggle Input',
    type: 'toggle',
    value: 'on',
    options: [
      { label: 'On', value: 'on' },
      { label: 'Off', value: 'off' },
    ],
  },
};
