import type { Meta, StoryObj } from "@storybook/react";
import Banner from "./Banner";

const meta: Meta<typeof Banner> = {
  title: "Components/Banner",
  component: Banner,
};

export default meta;
type Story = StoryObj<typeof Banner>;

export const Default: Story = {};
