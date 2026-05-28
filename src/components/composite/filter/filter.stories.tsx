import { useState } from 'react';

import { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Filter, FilterValue } from './filter';

const meta: Meta<typeof Filter> = {
  component: Filter,
};

export default meta;

type Story = StoryObj<typeof Filter>;

const TAGS = [
  { value: '2026', label: '2026' },
  { value: '2025', label: '2025' },
  { value: '2024', label: '2024' },
  { value: '2020s', label: '2020s' },
  { value: '2010s', label: '2010s' },
  { value: '2000s', label: '2000s' },
  { value: 'earlier', label: 'Earlier' },
];

const RATING = [
  { value: '8', label: '8+' },
  { value: '7', label: '7+' },
  { value: '6', label: '6+' },
];

const RUNTIME = [
  { value: '<90', label: '<90m' },
  { value: '90-120', label: '90-120m' },
  { value: '120-150', label: '120-150m' },
  { value: '150', label: '150m+' },
];

export const Default: Story = {
  args: {
    tags: TAGS,
    rating: RATING,
    runtime: RUNTIME,
  },
};

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState<FilterValue>({ tags: [], rating: [], runtime: [] });
    const count = value.tags.length + value.rating.length + value.runtime.length || undefined;

    return (
      <Filter
        tags={TAGS}
        rating={RATING}
        runtime={RUNTIME}
        value={value}
        onApply={setValue}
        count={count}
      />
    );
  },
};
