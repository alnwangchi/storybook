import type { Meta, StoryObj } from '@storybook/react';

import Checkbox from './Checkbox';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Atom/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    title: 'default',
    name: 'default',
  },
};

export const Disabled: Story = {
  args: {
    title: 'default',
    name: 'default',
    disabled: true,
  },
};
