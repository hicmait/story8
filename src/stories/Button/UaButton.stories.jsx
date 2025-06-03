import { UaButton } from "./UaButton";
// import { withKnobs } from "storybook/addon-knobs";
// import StoryRouter from "storybook-react-router";

// export default {
//   title: "UaButton",
//   component: UaButton,
//   decorators: [(Story) => <div style={{ padding: "3rem" }}>{Story()}</div>],
// };

// export const Primary = () => <UaButton variant="primary" children="Primary" />;
// export const Secondary = () => (
//   <UaButton variant="secondary" children="Secondary" />
// );

export default {
  component: UaButton,
  title: "UaButton",
};

export const Primary = {
  args: {
    variant: "primary",
    children: "Mon bouton",
  },
};
