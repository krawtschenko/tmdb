import { Meta, StoryObj } from '@storybook/nextjs-vite';

import { useSearchShortcut } from '@/hooks/useSearchShortcut';

import { SearchInput } from './searchInput';

const meta: Meta<typeof SearchInput> = {
  title: 'Components/SearchInput',
  component: SearchInput,
};

export default meta;

type Story = StoryObj<typeof SearchInput>;

export const Default: Story = {
  args: {
    placeholder: 'Search films, people, collections…',
  },
  render: (args) => {
    const ref = useSearchShortcut<HTMLInputElement>();
    return (
      <div style={{ width: '500px' }}>
        <SearchInput ref={ref} {...args} />
      </div>
    );
  },
};
