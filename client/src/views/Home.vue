<template>
  <div>
    <span class="font-weight-bold">Our Endangered Birds</span>
    <br />
    <v-col cols="3"><v-text-field label="Vorname"></v-text-field></v-col>
    <v-col cols="3"><v-text-field label="Nachname"></v-text-field></v-col>
    <br />
    <span class="font-italic">
      Click on the <span class="red--text font-weight-bold">eye</span> icon if you have observed
      that bird</span
    >
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    birds: {
      type: Array,
    },
  },
};
</script>
