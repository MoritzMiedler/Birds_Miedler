<template>
  <div>
    <v-alert color="red darken-2 white--text text-center">
      Last watched:
      <span class="font-italic">{{ lastSeen.commonName }}</span>
    </v-alert>
  </div>
</template>

<script>
export default {
  name: 'WatchedBirdname',
  data() {
    return {};
  },
  props: {
    lastSeen: {
      type: Object,
    },
  },
  methods: {},
};
</script>
