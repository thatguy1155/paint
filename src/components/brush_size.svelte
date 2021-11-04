<script>
  import Plus from '../assets/plus.svelte';
  import Minus from '../assets/minus.svelte';
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  const handleClick = () => {
    dispatch("brushSize",value);
  }
  let value = 5;
</script>
<div class="slidecontainer">
  <p>brush size</p>
  <div class="size-label">
    <Minus/>
    <span>-</span>
    <span>-</span>
    <span>-</span>
    <span>-</span>
    <Plus/>
  </div>
  <input type="range" min="1" max="50" on:change={() => handleClick()} bind:value={value} class="slider" id="myRange">
</div>

<style>
  /* not slider styling */
 
  /*slider */
  .slidecontainer {
    width: 100%; /* Width of the outside container */
    display:flex;
    flex-direction: column;
    align-items:center;
    color:aliceblue;
  }

  .size-label{
    width:100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }

/* The slider itself */
  .slider {
    -webkit-appearance: none;  /* Override default CSS styles */
    appearance: none;
    width: 100%; /* Full-width */
    height: 15px; /* Specified height */
    border-radius: 20px;
    background: #d3d3d3; /* Grey background */
    outline: none; /* Remove outline */
    opacity: 0.7; /* Set transparency (for mouse-over effects on hover) */
    -webkit-transition: .2s; /* 0.2 seconds transition on hover */
    transition: opacity .2s;
  }

  /* Mouse-over effects */
  .slider:hover {
    opacity: 1; /* Fully shown on mouse-over */
  }

  /* The slider handle (use -webkit- (Chrome, Opera, Safari, Edge) and -moz- (Firefox) to override default look) */
  .slider::-webkit-slider-thumb {
    -webkit-appearance: none; /* Override default look */
    appearance: none;
    border-radius: 50px;
    width: 20px; /* Set a specific slider handle width */
    height: 20px; /* Slider handle height */
    background: #57d9A3; /* Green background */
    cursor: pointer; /* Cursor on hover */
  }

  .slider::-moz-range-thumb {
    width: 25px; /* Set a specific slider handle width */
    height: 25px; /* Slider handle height */
    background: #04AA6D; /* Green background */
    cursor: pointer; /* Cursor on hover */
  }
</style>