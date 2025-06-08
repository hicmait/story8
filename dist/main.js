const c = "_button_djmih_1", e = "_primary_djmih_14", r = "_secondary_djmih_18", o = "_success_djmih_22", a = "_danger_djmih_26", t = {
  button: c,
  primary: e,
  secondary: r,
  success: o,
  danger: a
}, _ = ({ variant: s = "primary", label: n = "" }) => /* @__PURE__ */ React.createElement("button", { className: `${t.button} ${t[s]}` }, n);
export {
  _ as UaButton
};
