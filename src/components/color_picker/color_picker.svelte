<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  const handleClick = e => dispatch("selectColor",e.detail)
  import Color from './color.svelte';
  const colors = [
    '#A4C400',
    '#60A917',
    '#008A00',
    '#00ABA9',
    '#1BA1E2',
    '#0050EF',
    '#6A00FF',
    '#AA00FF',
    '#F472D0',
    '#D80073',
    '#A20025',
    '#E51400',
    '#FA6800',
    '#F0A30A',
    '#E3C800',
    '#825A2C',
    '#6D8764',
    '#647687',
    '#78808A',
    '#87794E',
    "#000000",
    "#FFFFFF"
  ]
  // const handleClick = (color) => {
  //   selectColor(color);
  //   console.log(color);
  // };
</script>

<div class="picker-wrapper" data-testid="color-picker">
  {#each colors as color}
      <Color color={color} on:selectedColor={handleClick}/>
  {/each}
</div>

<style>
  .picker-wrapper{
    display: flex;
    flex-wrap: wrap;
    width:100px;
  }
</style>