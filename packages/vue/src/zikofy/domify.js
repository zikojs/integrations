import { createApp } from 'vue'

export function domify(Component, props = {}) {
  const container = document.createElement("div");

  createApp(Component).mount(container)

  if (container.children.length === 1) return container.firstChild;
  return [...container.children];
}
