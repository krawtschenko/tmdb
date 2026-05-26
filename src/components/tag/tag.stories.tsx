import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Tag } from './tag';

const meta: Meta<typeof Tag> = {
  component: Tag,
};

export default meta;

type Story = StoryObj<typeof Tag>;

const TAGS = [
  { value: 'discover', label: 'Discover' },
  { value: 'films', label: 'Films' },
  { value: 'people', label: 'People', disabled: true },
  { value: 'watchlist', label: 'Watchlist' },
];

export const Default: Story = {
  args: {
    type: 'single',
    tabs: TAGS,
  },
};

export const Multiple: Story = {
  args: {
    type: 'multiple',
    tabs: TAGS,
  },
};
