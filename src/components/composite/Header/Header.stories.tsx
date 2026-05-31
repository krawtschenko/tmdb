import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Header } from './Header';

const meta: Meta<typeof Header> = {
  title: 'Composite/Header',
  component: Header,
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    name: 'Yevhenii Kravchenko',
    email: 'email@icloud.com',
  },
};
