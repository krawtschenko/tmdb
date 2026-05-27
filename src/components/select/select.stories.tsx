import { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Select } from './select';

const meta: Meta<typeof Select> = {
  component: Select,
};

export default meta;

type Story = StoryObj<typeof Select>;

const SORT_OPTIONS = [
  { value: 'rating', label: 'Highest rated' },
  { value: 'newest', label: 'Newest first' },
  { value: 'oldest', label: 'Oldest first' },
  { value: 'title', label: 'A → Z', disabled: true },
  { value: 'popular', label: 'Most watched' },
];

export const Default: Story = {
  args: {
    // open: true,
    placeholder: 'Sort by…',
    options: SORT_OPTIONS,
  },
};
