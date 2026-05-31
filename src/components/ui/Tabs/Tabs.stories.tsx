import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Tabs } from './Tabs';

const meta: Meta<typeof Tabs> = {
  title: 'UI/Tabs',
  component: Tabs,
};

export default meta;

type Story = StoryObj<typeof Tabs>;

const ITEMS = [
  { label: 'Tab 1', value: 'tab1' },
  { label: 'Tab 2', value: 'tab2' },
  { label: 'Tab 3', value: 'tab3' },
];

export const Default: Story = {
  args: {
    items: ITEMS,
  },
};

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState<string>(ITEMS[1].value);

    return <Tabs items={ITEMS} value={value} onValueChange={setValue} />;
  },
};
