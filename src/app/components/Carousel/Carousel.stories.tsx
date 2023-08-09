import type {Meta, StoryObj} from '@storybook/react';
import Slider from './Carousel';

const meta: Meta<typeof Slider> = {
    title : 'Components/Slider',
    component: Slider
};

export default meta;
type Story= StoryObj<typeof Slider>;

export const Default: Story = {}