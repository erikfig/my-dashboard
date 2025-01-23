import { StoryObj, Meta} from '@storybook/react';
import { Img, ImgProps } from './index';

export default {
  title: 'Components/Img',
  component: Img,
} as Meta;

export type Story = StoryObj<typeof Img>;

const Template = (args: ImgProps) => <Img {...args} />;

export const Default: Story = {
  render: Template,
  args: {
    src: 'https://placehold.co/150',
    alt: 'Placeholder Image',
  }
};
