import { Meta, StoryObj } from '@storybook/nextjs-vite';

import { SearchInput } from './SearchInput';

const meta: Meta<typeof SearchInput> = {
  title: 'UI/SearchInput',
  component: SearchInput,
};

export default meta;

type Story = StoryObj<typeof SearchInput>;

export const Default: Story = {
  args: {
    placeholder: 'Search films, people, collections…',
  },
  render: (args) => {
    return (
      <div style={{ width: '500px' }}>
        <SearchInput {...args} />
      </div>
    );
  },
};
