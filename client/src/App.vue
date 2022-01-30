<template>
  <v-app>
    <v-app-bar app color="blue lighten 1">
      <v-img src="./assets/bird.png" max-height="50" max-width="50" contain />
      <span class="h3 white--text mx-3">BIRD WATCH</span>
      <v-spacer />
      <v-btn color="primary" to="/" class="mx-2">HOME</v-btn>
      <v-btn color="primary" to="/gallery" class="mx-2">GALLERY</v-btn>
      <v-btn color="primary" to="/about" class="mx-2">ABOUT</v-btn>
    </v-app-bar>
    <v-main>
      <v-container> <router-view :birds="birds" @seen="seenBird" /></v-container>
    </v-main>
  </v-app>
</template>

<script>
import axios from 'axios';

export default {
  name: 'App',

  data: () => ({
    birds: [],
  }),
  methods: {
    async getBirds() {
      const result = await axios({ url: 'http://localhost:3000/birds', method: 'GET' });
      this.birds = result.data;
    },
    async seenBird(birdDATA) {
      await axios({
        url: `http://localhost:3000/birds/${birdDATA.bird.id}`,
        method: 'PATCH',
        contentType: 'application/json',
        data: { birdDATA },
      });
    },
  },
  created() {
    this.getBirds();
  },
};
</script>
