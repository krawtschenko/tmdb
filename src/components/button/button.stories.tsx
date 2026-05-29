import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Play } from 'lucide-react';
import { ChevronRight } from 'lucide-react';

import { Button } from './button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
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

export const AsLink: Story = {
  args: {
    as: 'a',
    href: '#',
    children: 'Go somewhere',
    variant: 'primary',
    size: 'md',
  },
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <Button variant="primary" size="md">
        Primary
      </Button>
      <Button variant="secondary" size="md">
        Secondary
      </Button>
      <Button variant="ghost" size="md">
        Ghost
      </Button>
      <Button variant="danger" size="md">
        Danger
      </Button>
    </div>
  ),
};
