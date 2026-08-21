import { Component, VNode } from "vue";
import { UIElement } from "ziko/dom";

export declare function domify<P = {}>(
  Component: Component | ((props: P) => VNode),
  props?: P
): HTMLElement | HTMLElement[];

export declare function zikofy<P = {}>(
  Component: Component | ((props: P) => VNode),
  props?: P
): UIElement | UIElement[];
