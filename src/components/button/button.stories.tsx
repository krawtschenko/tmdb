import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Button } from './button';
import { Play } from 'lucide-react';
import { ChevronRight } from 'lucide-react';

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Click me',
    disabled: false,
    fullWidth: false,
  },
};

export const WithIconLeft: Story = {
  args: {
    children: 'Click me',
    iconLeft: Play,
    disabled: false,
  },
};

export const WithIconRight: Story = {
  args: {
    children: 'Click me',
    iconRight: ChevronRight,
    disabled: false,
  },
};

export const AsLink: Story = {
  args: {
    as: 'a',
    href: '#',
    children: 'Go somewhere',
  },
};
