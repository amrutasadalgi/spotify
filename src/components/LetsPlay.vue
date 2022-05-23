<template>
  <div>
    <h1 class="pa-10 font-weight-black display-3">Ready? Lets play.</h1>
    <v-btn rounded class=" pa-6 font-weight-bold scale">GET SPOTIFY FREE</v-btn>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
div {
  background: url(https://www.scdn.co/i/free/lets-play.svg) left -10px bottom -160px /
      100% 1114px no-repeat,
    linear-gradient(-35deg, rgb(108, 14, 224) 16%, rgb(240, 55, 166))
      rgb(108, 14, 224);
  background-repeat: no-repeat;
  height: 60vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
}
.scale:hover{
  transform: scale(1rem);
  transition: 2s scale 1s;
}
</style>
