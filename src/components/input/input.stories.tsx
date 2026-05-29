import { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Input } from './input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: 'Email',
    placeholder: 'hello@reel.app',
    hint: "We'll never share this.",
    disabled: false,
  },
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <Input label="Email" placeholder="hello@reel.app" hint="We'll never share this." />
      <Input label="Email" placeholder="Password" hint="At least 8 characters." />
      <Input
        label="Password"
        type="password"
        hint="At least 8 characters."
        error="At least 8 characters."
      />
    </div>
  ),
};
