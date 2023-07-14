import type { Meta, StoryObj } from '@storybook/react';

import Badge from './Badge';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Atom/Badge',
  component: Badge,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    text: 'default',
  },
};
