<template>
  <div>
    <span class="font-weight-bold">Our Endangered Birds</span>
    <br />
    <v-col cols="3"><v-text-field label="Vorname"></v-text-field></v-col>
    <v-col cols="3"><v-text-field label="Nachname"></v-text-field></v-col>
    <v-col> <WatchedBirdname v-if="lastSeen" :lastSeen="lastSeen"></WatchedBirdname></v-col>
    <br />
    <span class="font-italic">
      Click on the <span class="red--text font-weight-bold">eye</span> icon if you have observed
      that bird</span
    >

    <v-data-table :headers="headers" :items="birds" :items-per-page="5" class="elevation-1"
      ><template v-slot:item.pic="{ item }">
        <v-img max-width="100" :src="item.pic"></v-img>
      </template>

      <template v-slot:item.actions="{ item }">
        <v-btn icon color="red" @click="seenBird(item)">
          <v-icon>mdi-eye</v-icon>
        </v-btn>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import WatchedBirdname from '@/components/WatchedBirdname.vue';

export default {
  name: 'Home',
  props: {
    birds: {
      type: Array,
    },
  },
  data() {
    return {
      headers: [
        { text: 'ID', align: 'start', sortable: false, value: 'id' },
        { text: 'Image', align: 'start', sortable: false, value: 'pic' },
        { text: 'Common Name', align: 'start', sortable: false, value: 'commonName' },
        { text: 'Scientific Name', align: 'start', sortable: false, value: 'scientificName' },
        { text: 'Observed', align: 'start', sortable: false, value: 'count' },
        { text: 'Actions', align: 'start', sortable: false, value: 'name' },
      ],
    };
  },
  methods: {
    seenBird(bird) {
      this.lastSeen = bird;
      return this.$emit('seen', { bird, observedBy: `${this.firstname} ${this.lastname}` });
    },
  },
  components: {
    WatchedBirdname,
  },
};
</script>
