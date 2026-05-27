import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Search } from 'lucide-react';

import { IconButton } from './iconButton';

const meta: Meta<typeof IconButton> = {
  component: IconButton,
};

export default meta;

type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
  args: {
    icon: Search,
    size: 'md',
    variant: 'solid',
    shape: 'square',
    indicator: 'dot',
    disabled: false,
  },
};

export const Count: Story = {
  args: {
    icon: Search,
    size: 'md',
    variant: 'solid',
    shape: 'square',
    indicator: 'count',
    count: 12,
    disabled: false,
  },
};
