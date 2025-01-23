import { Meta, StoryObj } from '@storybook/react';
import { FormContainer } from './index';
import { Input, Button, Card } from '@components';

const meta: Meta<typeof FormContainer> = {
  title: 'Components/Form/Container',
  component: FormContainer,
};

export default meta;

type Story = StoryObj<typeof FormContainer>;

export const Default: Story = {
  render: () => (
    <Card>
      <FormContainer>
        <Input name="input-text" label="Field text" placeholder='Field with HTML props support' />
        <Input name="input-password" label="Password" type='password' />
        <Button>Submit</Button>
      </FormContainer>
    </Card>
  ),
};