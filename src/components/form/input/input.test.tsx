import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Input } from './input';
import { describe, it, expect, vi } from 'vitest';

describe('Input Component', () => {
  it('renders the Text Input', () => {
    render(<Input name="input-text" label="Text Input" placeholder="Enter text" />);
    expect(screen.getByLabelText('Text Input')).toBeInTheDocument();
  });

  it('renders the Password Input', () => {
    render(<Input name="input-password" label="Password Input" type="password" />);
    const inputElement = screen.getByLabelText('Password Input');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('type', 'password');
  });

  it('renders the Date Input', () => {
    render(<Input name="input-date" label="Date Input" type="date" />);
    const inputElement = screen.getByLabelText('Date Input');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('type', 'date');
  });

  it('renders the Checkbox Input', () => {
    render(
      <Input
        name="input-checkbox"
        label="Checkbox Input"
        type="checkbox"
        options={[
          { label: 'Option 1', value: 'option1' },
          { label: 'Option 2', value: 'option2' },
        ]}
      />
    );
    expect(screen.getByLabelText('Option 1')).toBeInTheDocument();
    expect(screen.getByLabelText('Option 2')).toBeInTheDocument();
  });

  it('calls onChange when the input value changes', () => {
    const handleChange = vi.fn();
    render(<Input name="input-text" label="Text Input" onChange={handleChange} />);
    const inputElement = screen.getByLabelText('Text Input');
    fireEvent.change(inputElement, { target: { value: 'new value' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('renders the input with error state', () => {
    render(<Input name="input-text" label="Text Input" error />);
    const inputElement = screen.getByLabelText('Text Input');
    expect(inputElement).toHaveClass('!border-red-500');
  });

  it('renders the input with help text', () => {
    render(<Input name="input-text" label="Text Input" helpText="Help text" />);
    expect(screen.getByText('Help text')).toBeInTheDocument();
  });
});