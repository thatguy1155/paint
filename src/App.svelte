<script>
  import Header from './components/header/header.svelte';
  import Canvas from './components/canvas/canvas.svelte';
  import ColorPicker from './components/color_picker/color_picker.svelte';
  import SelectedColor from './components/selected_color/selected_color.svelte';
  let selectedColor = "#FFFFFF"
  const selectColor = e => {
    selectedColor = e.detail
    console.log(selectedColor)
  }
</script>
<svelte:body/>
<Header />
<div class="main-wrapper">
  <Canvas color={selectedColor}/>
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
</style>
