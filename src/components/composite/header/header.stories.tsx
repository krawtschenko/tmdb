import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Header } from './header';

const meta: Meta<typeof Header> = {
  title: 'Composite/Header',
  component: Header,
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {},
};
