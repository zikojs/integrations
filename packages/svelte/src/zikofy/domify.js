import { mount } from 'svelte'
export function domify(Component, props = {}) {
  const container = document.createElement("div");

  mount(Component, {
    target: container,
    props
  })

  if (container.children.length === 1) return container.firstChild;
  return [...container.children];
}
