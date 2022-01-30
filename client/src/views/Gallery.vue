<template>
  <div>
    <v-carousel height="800"
      ><v-carousel-item v-for="(bird, i) in birds" :key="i" max-height="1000px">
        <v-img :src="bird.pic" max-height="1000px"></v-img> </v-carousel-item
    ></v-carousel>
  </div>
</template>

<script>
export default {
  props: {
    birds: {
      type: Array,
    },
  },
};
</script>

<style lang="css" scoped></style>
