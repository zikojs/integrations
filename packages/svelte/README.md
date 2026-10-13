# @zikojs/svelte

Svelte wrapper for [Ziko.js](https://github.com/zakarialaoui10/ziko.js): mount Ziko `UIElement`s inside Svelte components.

## Install

```bash
npm i @zikojs/svelte
```

## Usage

```svelte
<script>
  import { tags } from "ziko/dom";
  import { ZikoWrapper } from "@zikojs/svelte";

  const { h1, p } = tags;
</script>

<!-- single element -->
<ZikoWrapper items={h1("Hello")} />

<!-- multiple elements -->
<ZikoWrapper items={[h1("Hello"), p("From Ziko.js")]} />
```

## Props

| Prop    | Type                           | Description                          |
| ------- | ------------------------------ | ------------------------------------ |
| `items` | `UIElement \| UIElement[]`     | Element(s) to mount in the wrapper.  |