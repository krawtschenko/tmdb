import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Avatar } from './avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    alt: 'Jane Doe',
    fallback: 'JD',
  },
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <Avatar alt="Jane Doe" fallback="JD" size="sm" />
      <Avatar alt="Jane Doe" fallback="JD" size="md" />
      <Avatar alt="Jane Doe" fallback="JD" size="lg" />
    </div>
  ),
};
