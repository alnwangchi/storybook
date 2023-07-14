import type { Meta, StoryObj } from '@storybook/react';

import TextBlock from './TextBlock';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Molecules/TextBlock',
  component: TextBlock,
  tags: ['autodocs'],
};
type Story = StoryObj<typeof meta>;

export default meta;

export const Base: Story = {
  args: {
    title: 'default',
    content: 'content',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '300px', margin: '0 auto', border: '1px solid #000' }}>
        <Story />
      </div>
    ),
  ],
};
