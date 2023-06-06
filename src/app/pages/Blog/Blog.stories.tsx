import type {Meta, StoryObj} from '@storybook/react';
import Blog from "./Blog";


const meta : Meta<typeof Blog> = {
    title: "Pages/Blog",
    component: Blog,
}

export default meta;

type Story = StoryObj<typeof Blog>;
export const Default: Story= {};