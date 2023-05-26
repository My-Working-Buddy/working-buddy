import type {Meta, StoryObj} from '@storybook/react';
import ContactUs from './ContactUs';


const meta:  Meta<typeof ContactUs> = {
    title: 'Pages/Contact Us',
    component: ContactUs
};

export default meta;
type Story = StoryObj<typeof ContactUs>;

export const Default: Story = {}