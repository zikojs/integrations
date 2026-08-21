import { render } from "solid-js/web";

export function domify(Component, props = {}) {
  const container = document.createElement("div");

  render(() => {
    if (typeof Component === "function") {
      return Component(props);
    }
    return Component;
  }, container);

  if(container.children.length === 1) return container.firstChild;
  return [...container.children];

}
