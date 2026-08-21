import { createRoot } from "react-dom/client";
import { flushSync } from "react-dom"
import { isValidElement, createElement } from "react";

export const domify = (Component, props = {}) => {
  const container = document.createElement("div");
  const root = createRoot(container);

  const isJsx = isValidElement(Component);

  flushSync(() => {
    root.render(
      isJsx ? Component : createElement(Component, props)
    );
  });

  const el = container.firstElementChild;
  root.unmount();
  return el
};
