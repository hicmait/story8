import { UaButton } from "./UaButton";

export default {
  component: UaButton,
  title: "UaButton",
  decorators: [(Story) => <div style={{ padding: "3rem" }}>{Story()}</div>],
};

export const Primary = {
  args: {
    variant: "primary",
    label: "Mon bouton",
  },
};
export const Danger = () => <UaButton variant="danger" label="mon bouton" />;
