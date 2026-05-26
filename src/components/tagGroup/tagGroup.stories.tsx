import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { TagGroup } from './tagGroup';

const meta: Meta<typeof TagGroup> = {
  component: TagGroup,
};

export default meta;

type Story = StoryObj<typeof TagGroup>;

const TABS = [
  { value: 'discover', label: 'Discover' },
  { value: 'films', label: 'Films' },
  { value: 'people', label: 'People', disabled: true },
  { value: 'watchlist', label: 'Watchlist' },
];

export const Default: Story = {
  args: {
    type: 'single',
    tabs: TABS,
  },
};

export const Multiple: Story = {
  args: {
    type: 'multiple',
    tabs: TABS,
  },
};
