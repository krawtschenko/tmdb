import { useState } from 'react';

import { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Tag } from './tag';

const meta: Meta<typeof Tag> = {
  component: Tag,
};

export default meta;

type Story = StoryObj<typeof Tag>;

const genres = ['Action', 'Comedy', 'Drama', 'Horror', 'Documentary', 'Sci-Fi', 'Thriller'];

export const Default: Story = {
  args: {
    children: 'Documentary',
  },
};

export const Controlled: Story = {
  render: () => {
    const [selected, setSelected] = useState<string[]>([]);

    const toggle = (genre: string) =>
      setSelected((prev) =>
        prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre],
      );

    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {genres.map((genre) => (
          <Tag key={genre} pressed={selected.includes(genre)} onPressedChange={() => toggle(genre)}>
            {genre}
          </Tag>
        ))}
      </div>
    );
  },
};
