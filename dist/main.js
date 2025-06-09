import { jsx as r } from "react/jsx-runtime";
const o = "_button_djmih_1", c = "_primary_djmih_14", _ = "_secondary_djmih_18", e = "_success_djmih_22", a = "_danger_djmih_26", s = {
  button: o,
  primary: c,
  secondary: _,
  success: e,
  danger: a
}, m = ({ variant: t = "primary", label: n = "" }) => /* @__PURE__ */ r("button", { className: `${s.button} ${s[t]}`, children: n });
export {
  m as UaButton
};
