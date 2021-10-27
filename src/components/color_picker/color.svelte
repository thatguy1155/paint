<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  const onSelect = () => dispatch("selectedColor",color)
  export let color;
  
</script>

<button class="color" data-testid={color === '#008A00' ? 'green' : ''} style="background-color:{color}" on:click="{() => onSelect(color)}"></button>
<style>
  .color{
    width:30px;
    height:30px;
  }
</style>