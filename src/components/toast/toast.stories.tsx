import { StoryObj, Meta } from '@storybook/react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Button } from '../button'

export default {
  title: 'Components/Toast',
  component: ToastContainer,
} as Meta

export type Story = StoryObj<typeof ToastContainer>

const Template = () => (
  <>
    <Button onClick={() => toast('Mensagem de exemplo!')}>Mostrar Toast</Button>
    <ToastContainer />
  </>
)

export const Default: Story = {
  render: Template,
}
