import { ReactElement, FunctionComponent, ComponentClass } from "react";
import { UIElement } from "ziko/dom";

export declare function domify(
    Component: ReactElement | FunctionComponent<any> | ComponentClass<any>,
    props?: Record<string, any>
): HTMLElement;

export declare function zikofy(
    Component: ReactElement | FunctionComponent<any> | ComponentClass<any>,
    props?: Record<string, any>
): UIElement;
