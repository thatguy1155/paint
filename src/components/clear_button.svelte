<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  const handleClick = e => dispatch("clear",e.detail);
</script>

<button on:click={() => handleClick(true)}> clear </button>

<style>
  button{
    height: 40px;
    width: 100px;
    margin-top: 10px;
    border-radius: 10px;
  }
</style>