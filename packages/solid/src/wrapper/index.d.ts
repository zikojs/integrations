import { JSX } from 'solid-js';
import { UIElement } from 'ziko/dom';

export interface ZikoWrapperProps {
  children: () => { element: HTMLElement };
}

export function ZikoWrapper(props: ZikoWrapperProps): JSX.Element;