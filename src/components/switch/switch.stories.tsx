import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Switch } from './switch';

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {
    size: 'lg',
    disabled: false,
    label: 'Switch',
  },
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <Switch size="md" label="Switch" />
      <Switch size="lg" label="Switch" />
    </div>
  ),
};
