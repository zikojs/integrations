# @zikojs/astro

Integrate [ZikoJS](https://github.com/zikojs/ziko) components into [Astro](https://astro.build/) applications.

## Setup

Install the integration with Astro's CLI:

```bash
npx astro add @zikojs/astro
```

Or install it manually:

```bash
npm install @zikojs/astro
```

Then add the integration to your `astro.config.mjs`:

```js
import { defineConfig } from "astro/config";
import ziko from "@zikojs/astro";

export default defineConfig({
  integrations: [ziko()],
});
```

## Usage

### 1. Define a ZikoJS component

Create a ZikoJS component:

```js
// HelloFromZikoJs.js
import { p } from "ziko/dom";

export default function HelloFromZikoJs({ color }) {
  return p("Hello From ZikoJS").style({ color });
}
```

### 2. Render the component in Astro

Import the component into an `.astro` file:

```astro
---
import HelloFromZikoJs from "./HelloFromZikoJs.js";
---

<HelloFromZikoJs
  color="orange"
  client:only="javascript"
/>
```

The `client:only="javascript"` directive tells Astro to render the ZikoJS component exclusively on the client.

## License

MIT
