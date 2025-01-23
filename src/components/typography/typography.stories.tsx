import { StoryObj, Meta } from '@storybook/react'
import { Typography, TypographyProps } from './index'

export default {
  title: 'Components/Typography',
  component: Typography,
} as Meta

export type Story = StoryObj<typeof Typography>

const Template = (args: TypographyProps) => <Typography {...args} />

export const Default: Story = {
  render: Template,
  args: {
    type: 'p',
    children: 'Texto padrão',
  },
}

export const Heading1: Story = {
  render: Template,
  args: {
    type: 'h1',
    children: 'Título H1',
  },
}

export const Heading2: Story = {
  render: Template,
  args: {
    type: 'h2',
    children: 'Título H2',
  },
}

export const Ellipsis: Story = {
  render: Template,
  args: {
    type: 'p',
    children: 'Este é um texto muito longo que deve ser truncado com reticências se não couber no espaço disponível. Este é um texto muito longo que deve ser truncado com reticências se não couber no espaço disponível.',
    ellipsis: true,
  },
}
