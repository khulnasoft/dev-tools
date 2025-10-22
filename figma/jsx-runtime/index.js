export function jsx(type, props, key) {
  return {
    type,
    props,
    key,
  };
}

export function jsxs(type, props, key, ...children) {
  return {
    type,
    props: {
      ...props,
      children,
    },
    key,
  };
}
