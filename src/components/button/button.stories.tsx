import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Play } from 'lucide-react';
import { ChevronRight } from 'lucide-react';

import { Button } from './button';

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Click me',
    variant: 'primary',
    size: 'md',
    disabled: false,
    fullWidth: false,
  },
};

export const WithIconLeft: Story = {
  args: {
    children: 'Click me',
    variant: 'primary',
    size: 'md',
    iconLeft: Play,
    disabled: false,
  },
};

export const WithIconRight: Story = {
  args: {
    children: 'Click me',
    variant: 'primary',
    size: 'md',
    iconRight: ChevronRight,
    disabled: false,
  },
};

export const AsLink: Story = {
  args: {
    as: 'a',
    href: '#',
    children: 'Go somewhere',
    variant: 'primary',
    size: 'md',
  },
};
