import { Meta, StoryObj } from '@storybook/nextjs-vite';

import { RatingBadge } from './ratingBadge';

const meta: Meta<typeof RatingBadge> = {
  title: 'Components/RatingBadge',
  component: RatingBadge,
};

export default meta;

type Story = StoryObj<typeof RatingBadge>;

export const Default: Story = {
  args: {
    value: 9,
    denom: '10',
    variant: 'pill',
    indicator: 'ring',
  },
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <RatingBadge value={5.5} denom="10" variant="pill" indicator="ring" />
      <RatingBadge value={5.5} denom="10" variant="pill" indicator="dot" />
      <RatingBadge value={5.5} denom="10" variant="inline" indicator="ring" />
      <RatingBadge value={5.5} denom="10" variant="inline" indicator="dot" />
    </div>
  ),
};
