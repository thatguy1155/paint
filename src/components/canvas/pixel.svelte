<script>
  export let color;
  let localColor = "#FFFFFF";
  const changeColor = (color) => {
    console.log(color);
    localColor = color;
  }
</script>

<div class="pixel" style="background-color:{localColor}" on:mouseover="{() => changeColor(color)}"></div>

<style>
  .pixel{
    height:2px;
    width:2px;
    margin:0px;
  }
</style>