import type { ComponentType, JSX } from 'preact';
import type { UIElement } from 'ziko/dom';

export declare function domify<P = {}>(
  Component: ComponentType<P> | JSX.Element,
  props?: P
): HTMLElement | HTMLElement[];

export declare function asyncDomify<P = {}>(
  Component: ComponentType<P> | (() => Promise<JSX.Element>),
  props?: P
): Promise<HTMLElement | HTMLElement[]>;

export declare function zikofy<P = {}>(
  Component: ComponentType<P> | JSX.Element,
  props?: P
): UIElement | UIElement[];

