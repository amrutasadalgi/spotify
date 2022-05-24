<template>
  <div class="main-container">
    <svg viewBox="-250 -50 600 590">
      <path
        d="M36.28,0H253.72A36.28,36.28,0,0,1,290,36.27v518a36.28,36.28,0,0,1-36.28,36.27H36.28A36.28,36.28,0,0,1,0,554.31v-518A36.28,36.28,0,0,1,36.28,0Z"
        fill="#fff"
      ></path>
      <path
        d="M125,25h40a3,3,0,0,1,0,6H125a3,3,0,0,1,0-6Z"
        fill="#231f20"
      ></path>
    </svg>
    <v-img
      class="pic"
      max-height="475"
      max-width="288"
      src="https://i.scdn.co/image/ab678e040000ed3aed58911aecc6dbc16949f40b"
    ></v-img>
    <v-container
      width="400"
      height="600"
      class="mt-16 pt-16 mr-16 pr-10 ml-n-16"
    >
      <v-col>
        <v-content class="white--text display-3 font-weight-black pt-16"
          >Play millions of songs and podcasts, for free.</v-content
        >
        <v-btn rounded class="font-weight-bold mt-10 pa-6 scale"
          >GET SPOTIFY FREE</v-btn
        >
      </v-col>
    </v-container>
  </div>
</template>
<script>
export default {};
</script>

<style scoped>
.main-container {
  background-image: url(https://www.scdn.co/i/free/bubbles-dktp.svg),
    linear-gradient(-45deg, rgb(108, 14, 224) -5%, rgb(240, 55, 166));
  background-repeat: no-repeat;
  width: 100%;
  height: 98vh;
  background-blend-mode: color;
  background-position: center -58px;
  display: flex;
  position: relative;
}
.pic {
  position: absolute;
  top: 7rem;
  left: 16.9rem;
}
.scale:hover {
  transform: scale(1rem);
  transition: 2s scale 1s;
}
</style>
