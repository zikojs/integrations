import { render } from 'preact';

export async function asyncDomify(Component, props) {
    if (typeof Component !== 'function')
        throw new Error('asyncDomify expects a function component');

    const container = document.createElement('div');
    const result = await Component(props); 
    render(result, container);

    return container.children.length === 1
        ? container.firstChild
        : [...container.children];
}