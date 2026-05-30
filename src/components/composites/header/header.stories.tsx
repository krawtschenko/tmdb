import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Header } from './header';

const meta: Meta<typeof Header> = {
  title: 'Composites/Header',
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
