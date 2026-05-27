import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Dropdown } from './dropdown';

const meta: Meta<typeof Dropdown> = {
  component: Dropdown,
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  args: {},
};
