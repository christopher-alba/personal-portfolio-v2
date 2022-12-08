import { ComponentStory, ComponentMeta, Parameters } from "@storybook/react";
import SelectAndDisplay from "../components/SelectAndDisplay";
import { ThemeProvider } from "styled-components";
import themes from "../themes/schema.json";
import { GlobalStyles } from "../themes/globalStyles";
import { useEffect, useState } from "@storybook/addons";

export default {
  title: "Example/SelectAndDisplay",
  component: SelectAndDisplay,
  parameters: {
    docs: {
      description: {
        component: "Custom component description",
      },
    },
  },
  argTypes: {
    optionsAndContents: {
      description: "Overwritten description",
    },
  },
} as ComponentMeta<any>;

const Template: ComponentStory<any> = (args) => {
  return (
    <ThemeProvider theme={args.theme as any}>
      <GlobalStyles />
      <div
        style={{ background: args.theme?.colors.primaryMain}}
      >
        <SelectAndDisplay optionsAndContents={args.optionsAndContents} />
      </div>
    </ThemeProvider>
  );
};

// const DynamicTemplate: ComponentStory<any> = (args) => {
//   const [finalOptions, setFinalOptions] = useState({
//     options: [
//       {
//         name: "hello",
//         content: <h1>Hello</h1>,
//       },
//     ],
//   });
//   useEffect(() => {
//     let optionArray: any = [];
//     for (let i = 0; i < args.optionCount; i++) {
//       optionArray.push({
//         name: "option" + i,
//         content: <p>Hello there {i}</p>,
//       });
//     }
//     setFinalOptions({
//       options: optionArray,
//     });
//   }, [args.optionCount]);

//   return (
//     <ThemeProvider theme={args.theme as any}>
//       <GlobalStyles />
//       <div
//         style={{ background: args.theme?.colors.primaryMain, padding: "50px" }}
//       >
//         <SelectAndDisplay optionsAndContents={finalOptions} />
//       </div>
//     </ThemeProvider>
//   );
// };

export const Light = Template.bind({});
Light.args = {
  optionsAndContents: {
    options: [
      {
        name: "option1",
        content: <p>Hello there 1</p>,
      },
      {
        name: "option2",
        content: <p>Hello there 2</p>,
      },
      {
        name: "option3",
        content: <p>Hello there 3</p>,
      },
    ],
  },
  theme: themes.light,
};
Light.parameters = {
  optionsAndContents: {
    description: {
      story: "Custom Description",
    },
  },
};
export const Dark = Template.bind({});
Dark.args = {
  optionsAndContents: {
    options: [
      {
        name: "option1",
        content: <p>Hello there 1</p>,
      },
      {
        name: "option2",
        content: <p>Hello there 2</p>,
      },
      {
        name: "option3",
        content: <p>Hello there 3</p>,
      },
    ],
  },
  theme: themes.dark,
};

// export const DynamicLight = DynamicTemplate.bind({});
// DynamicLight.args = {
//   optionCount: 10,
//   theme: themes.light,
// };

// export const DynamicDark = DynamicTemplate.bind({});
// DynamicDark.args = {
//   optionCount: 10,
//   theme: themes.dark,
// };
