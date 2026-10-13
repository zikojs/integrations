import { SvelteComponent } from 'svelte';
import type { UIElement } from 'ziko/dom';

export interface ZikoWrapperProps {
  /** A single UIElement or an array of them to mount inside the wrapper. */
  items?: UIElement | UIElement[] | null;
}

export default class ZikoWrapper extends SvelteComponent<
  ZikoWrapperProps,
  Record<string, never>, // events
  Record<string, never>  // slots
> {}