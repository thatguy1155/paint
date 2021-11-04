<script>
  import Header from './components/header/header.svelte';
  import Canvas from './components/canvas/canvas.svelte';
  import ColorPicker from './components/color_picker/color_picker.svelte';
  import SelectedColor from './components/selected_color/selected_color.svelte';
  import ClearButton from './components/clear_button.svelte';
  import BrushSize from './components/brush_size.svelte';

  //state
  let selectedColor = "#FFFFFF";
  let clear = false;
  let brushSize = 5;

  //methods
  const clearCanvas = () => {
    clear = true;
    setTimeout(function(){ clear = false }, 500);
  }

  const selectColor = e => {
    selectedColor = e.detail;
  }
  const setBrushSize = e => {
    brushSize = e.detail;
  }
</script>
<svelte:body/>
<Header />
<div class="main-wrapper">
  <div class="canvas-wrapper">
    <Canvas brushSize={brushSize} clear={clear} color={selectedColor}/>
    <div class="bottom-content">
      <BrushSize on:brushSize={setBrushSize} />
      <ClearButton on:clear={clearCanvas} />
    </div>
  </div>
  <div class="color-container">
    <SelectedColor color={selectedColor} />
    <ColorPicker on:selectColor={selectColor}/>
  </div>
  
</div>


<style>
  :global(body) {
		padding: 0;
    background-color: #243b53;
	}
  .main-wrapper{
    display:flex;
    align-items: center;
    justify-content: space-around;
  }
  .color-container{
    display:flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    justify-content:center;
  }
  .canvas-wrapper{
    display: flex;
    flex-direction: column;
  }
  .bottom-content{
    display:flex;
    flex-direction:column;
    align-items: center;
    width:100%;
    height: 100px;
  }
</style>
