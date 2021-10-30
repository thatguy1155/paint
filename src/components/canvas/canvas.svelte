<script>
  export let color;
  export let clear;
  export let brushSize;
  let canDraw = false;
  const setCanDraw = () => canDraw = !canDraw;

  $: if (clear) clearCanvasElement();

  const clearCanvasElement = () => {
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  
  
</script>

<div class="canvas-wrapper">
  <canvas id="canvas" on:clearCanvas={() => clearCanvasElement()} on:mousedown={() => setCanDraw()} on:mouseup={() => setCanDraw()} on:mousemove={() => paint(brushSize,color,canDraw)}></canvas>
  <script> 
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    const bodyRect = document.body.getBoundingClientRect();
    const canvasPosition = canvas.getBoundingClientRect();
    const canvasOffsetTop  = canvasPosition.top - bodyRect.top;
    const canvasOffsetRight  = canvasPosition.left - bodyRect.left;

    function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: (evt.clientX - rect.left) / (rect.right - rect.left) * canvas.width,
        y: (evt.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height
    };
}
    const paint = (brushSize, color, canDraw, e) => {
      var e = window.event;
      const mousePos = getMousePos(canvas,e)
      ctx.fillStyle = color;
      if (canDraw) ctx.fillRect(mousePos.x, mousePos.y, brushSize, brushSize);
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