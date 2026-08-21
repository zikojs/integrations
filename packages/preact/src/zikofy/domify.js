import { render, h } from 'preact';

export function domify(Component, props) {
    const container = document.createElement('div')
    render(
        h(Component, props), 
        container
    )
    if(container.children.length === 1) return container.firstChild;
    return [...container.children];
}