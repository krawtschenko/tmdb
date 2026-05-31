import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Clock8 } from 'lucide-react';

import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'UI/Badge',
  component: Badge,
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    variant: 'accent',
    text: 'Watched',
    icon: Clock8,
  },
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <Badge variant="neutral" text="Neutral" />
      <Badge variant="accent" text="Accent" />
      <Badge variant="signal" text="Signal" />
      <Badge variant="success" text="Success" />
      <Badge variant="solid" text="Solid" />
    </div>
  ),
};
