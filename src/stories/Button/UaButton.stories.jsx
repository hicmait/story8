import { UaButton } from "./UaButton";
// import { UaButton } from "../../../dist/main.js";
// import "../../../dist/main.css";

export default {
  component: UaButton,
  title: "UaButton",
  decorators: [(Story) => <div style={{ padding: "3rem" }}>{Story()}</div>],
};

export const Primary = {
  args: {
    variant: "primary",
    children: "Mon bouton",
  },
};
export const Danger = () => <UaButton variant="danger">Erreur</UaButton>;
