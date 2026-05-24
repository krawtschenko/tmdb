import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Switch } from './switch';

const meta: Meta<typeof Switch> = {
  component: Switch,
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <Switch
        size="lg"
        checked={checked}
        onCheckedChange={setChecked}
        label={checked ? 'On' : 'Off'}
      />
    );
  },
};
