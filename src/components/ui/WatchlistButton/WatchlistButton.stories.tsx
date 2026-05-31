import { useState } from 'react';

import { Meta, StoryObj } from '@storybook/nextjs-vite';

import { WatchlistButton } from './WatchlistButton';

const meta: Meta<typeof WatchlistButton> = {
  title: 'UI/WatchlistButton',
  component: WatchlistButton,
};

export default meta;

type Story = StoryObj<typeof WatchlistButton>;

export const Default: Story = {
  args: {
    compact: true,
    onDark: false,
  },
};

export const Controlled: Story = {
  args: {
    compact: false,
  },
  render: (args) => {
    const [pressed, setPressed] = useState(false);

    return <WatchlistButton {...args} pressed={pressed} onPressedChange={setPressed} />;
  },
};
