import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Component } from './component';

const meta: Meta<typeof Component> = {
  component: Component,
};

export default meta;

type Story = StoryObj<typeof Component>;

export const Default: Story = {
  args: {},
};
