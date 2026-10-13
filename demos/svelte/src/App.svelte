<script>
  import { tags } from "ziko/dom";
  const { h1 } = tags;
  import { ZikoWrapper } from "@zikojs/svelte";
  
  const Heading = ({msg}) => h1(msg);
</script>

<!-- Prop Syntax (Still fully supported) -->
<ZikoWrapper items={Heading({msg: "Other ..."})} />