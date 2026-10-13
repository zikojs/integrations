<script>
  import { UIElement } from 'ziko/dom';

  export let items = undefined;

  let containerRef;

  $: if (containerRef) render(items);

  function render(value) {
    containerRef.replaceChildren();
    if (value == null) return;

    for (const item of Array.isArray(value) ? value : [value]) {
      if (item instanceof UIElement) containerRef.appendChild(item.element);
      else console.warn("ZikoWrapper: expected a UIElement, got", item);
    }
  }
</script>

<div
  bind:this={containerRef}
  data-engine="zikojs"
  style="display: contents;"
></div>