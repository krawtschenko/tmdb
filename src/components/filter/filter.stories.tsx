import { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Filter } from './filter';

const meta: Meta<typeof Filter> = {
  component: Filter,
};

export default meta;

type Story = StoryObj<typeof Filter>;

export const Default: Story = {
  args: {},
};
