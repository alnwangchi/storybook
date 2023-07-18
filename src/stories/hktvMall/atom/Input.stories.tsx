import type { Meta, StoryObj } from '@storybook/react';

import Input from './Input';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Atom/Input',
  component: Input,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    label: '姓名',
    name: 'name',
    placeholder: 'placeholder',
  },
};
