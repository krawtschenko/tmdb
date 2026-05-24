import { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Select } from './select';

const meta: Meta<typeof Select> = {
  component: Select,
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    placeholder: 'Sort by…',
    options: [
      { value: 'popularity', label: 'Popularity' },
      { value: 'rating', label: 'Rating' },
      { value: 'release_date', label: 'Release date', disabled: true },
      { value: 'title', label: 'Title' },
    ],
  },
};
