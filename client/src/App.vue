<template>
  <v-app>
    <v-app-bar app color="blue lighten 1">
      <v-img src="./assets/bird.png" max-height="50" max-width="50" contain />
      <span class="h3 white--text mx-3">BIRD WATCH</span>
      <v-spacer />
      <v-btn color="primary" to="/home" class="mx-2">HOME</v-btn>
      <v-btn color="primary" to="/gallery" class="mx-2">GALLERY</v-btn>
      <v-btn color="primary" to="/about" class="mx-2">ABOUT</v-btn>
    </v-app-bar>
    <v-main>
      <v-container> <router-view /></v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
