import { useState } from 'react';

import { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Filter, Options } from './filter';

const meta: Meta<typeof Filter> = {
  component: Filter,
};

export default meta;

type Story = StoryObj<typeof Filter>;

const OPTIONS: Options = {
  Year: [
    { value: '2026', label: '2026', checked: false },
    { value: '2025', label: '2025', checked: false },
    { value: '2024', label: '2024', checked: true },
    { value: '2020s', label: '2020s', checked: false },
    { value: '2010s', label: '2010s', checked: false },
    { value: '2000s', label: '2000s', checked: false },
    { value: 'earlier', label: 'Earlier', checked: false },
  ],
  Rating: [
    { value: '8', label: '8+', checked: false },
    { value: '7', label: '7+', checked: true },
    { value: '6', label: '6+', checked: false },
  ],
  Runtime: [
    { value: '<90', label: '<90m', checked: true },
    { value: '90-120', label: '90-120m', checked: false },
    { value: '120-150', label: '120-150m', checked: false },
    { value: '150', label: '150m+', checked: false },
  ],
};

export const Default: Story = {
  render: () => {
    const [options, setOptions] = useState<Options>(OPTIONS);

    return <Filter options={options} onApply={setOptions} />;
  },
};
