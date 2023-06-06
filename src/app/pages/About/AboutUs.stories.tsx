import type {Meta, StoryObj} from '@storybook/react';
import AboutUs from './AboutUs';

const meta:  Meta<typeof AboutUs> = {
    title: 'Pages/About Us',
    component: AboutUs
};

export default meta;
type Story = StoryObj<typeof AboutUs>;

export const Default: Story = {}