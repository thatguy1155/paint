<script>
  export let color;
</script>

<div class="selected-color-display">
  <h3 class="selected-title" data-testid="selected">selected:</h3>
  <div class="selected-color" style="background-color:{color}"></div>
</div>

<style>
  .selected-color{
    width:50px;
    height:30px;
  }
  .selected-color-display{
    color: #627D98;
    border: 1px solid #627D98;
    border-radius: 10px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding:5px;
  }
  .selected-title{
    text-decoration: underline;
    font-family: Arial, Helvetica, sans-serif;
  }
</style>