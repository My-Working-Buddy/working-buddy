import type { Meta, StoryObj } from "@storybook/react";
import Footer from "./Footer";

const meta = {
  title: "Components/Footer",
  component: Footer,
} as Meta<typeof Footer>;

export default meta;

type Story = StoryObj<typeof Footer>;
export const Default: Story = {};
