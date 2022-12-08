import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TertiaryButton } from "../components/Button";
import { ThemeProvider } from "styled-components";
import themes from "../themes/schema.json";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Button",
  component: TertiaryButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof TertiaryButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TertiaryButton> = (args) => (
  <ThemeProvider theme={args.theme as any}>
    <div
      style={{ background: args.theme?.colors.primaryMain, padding: "50px" }}
    >
      <TertiaryButton {...args}>{args.label}</TertiaryButton>
    </div>
  </ThemeProvider>
);

export const Light = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Light.args = {
  label: "Button",
  theme: themes.light,
};

export const Dark = Template.bind({});
Dark.args = {
  label: "Button",
  theme: themes.dark,
};
