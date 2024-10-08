import type { Meta, StoryObj } from '@storybook/react';
import Newsletter from './Newsletter';

const meta: Meta<typeof Newsletter> = {
  title: 'Components/Newsletter',
  component: Newsletter,
};

export default meta;
type Story = StoryObj<typeof Newsletter>;

export const Default: Story = {};
