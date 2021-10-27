<script>
  export let color;
  let canDraw = false;
  const setCanDraw = () => canDraw = !canDraw
</script>

<div class="canvas-wrapper">
  <canvas id="canvas" on:mousedown={() => setCanDraw()} on:mouseup={() => setCanDraw()} on:mousemove={() => paint(color,canDraw)}></canvas>
  <script> 
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    const bodyRect = document.body.getBoundingClientRect();
    const canvasPosition = canvas.getBoundingClientRect();
    const canvasOffsetTop  = canvasPosition.top - bodyRect.top;
    const canvasOffsetRight  = canvasPosition.left - bodyRect.left;

    const paint = (color, canDraw) => {
      var e = window.event;
      console.log(e.clientY)
      ctx.fillStyle = color;
      if (canDraw) ctx.fillRect(e.clientX - canvasPosition.left, e.clientY - canvasOffsetTop, 2, 2);
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