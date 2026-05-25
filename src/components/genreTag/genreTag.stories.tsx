import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { GenreTag } from './genreTag';

const meta: Meta<typeof GenreTag> = {
  component: GenreTag,
};

export default meta;

type Story = StoryObj<typeof GenreTag>;

export const Default: Story = {
  args: {
    text: 'Documentary',
  },
};
