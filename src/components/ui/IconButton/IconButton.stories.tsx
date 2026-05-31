import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Search } from 'lucide-react';

import { IconButton } from './IconButton';

const meta: Meta<typeof IconButton> = {
  title: 'UI/IconButton',
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
    dot: true,
    disabled: false,
  },
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <IconButton
        icon={Search}
        size="md"
        variant="solid"
        shape="square"
        count={0}
        disabled={false}
      />
      <IconButton
        icon={Search}
        size="md"
        variant="solid"
        shape="circle"
        count={0}
        disabled={false}
      />
      <IconButton
        icon={Search}
        size="md"
        variant="ghost"
        shape="square"
        count={0}
        disabled={false}
      />
      <IconButton
        icon={Search}
        size="md"
        variant="ghost"
        shape="square"
        count={12}
        disabled={false}
      />
      <IconButton
        icon={Search}
        size="md"
        variant="ghost"
        shape="circle"
        count={12}
        dot={true}
        disabled={false}
      />
    </div>
  ),
};
