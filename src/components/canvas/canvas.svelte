<script>
  import Pixel from './pixel.svelte';
  export let color;
  let canDraw = false;
  const setCanDraw = () => canDraw = !canDraw
</script>

<div class="canvas-wrapper">
  <canvas id="canvas" on:mousedown={() => setCanDraw()} on:mouseup={() => setCanDraw()} on:mousemove={() => paint(color,canDraw)}></canvas>
  <script> 
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    const paint = (color, canDraw) => {
      var e = window.event;
      console.log(canDraw)
      ctx.fillStyle = color;
      if (canDraw) ctx.fillRect(e.clientX - e.clientX/1.2, e.clientY - 200, 2, 2);
    }
  </script>
</div>


<style>
  .canvas-wrapper{
    display:flex;
    justify-content: center;
    align-items: center;
    height: 500px;
    width: 500px;
  }
  #canvas{
    background-color: #fff;
    width: 400px;
    height: 400px;
    display: flex;
    flex-wrap: wrap;
  }
</style>