<template>
  <div class="home-screen">
    <LiveScores />
  </div>
</template>

<script>
import LiveScores from '@/components/LiveScores.vue';

export default {
  components: {
    LiveScores
  }
};
</script>

<style scoped>
.home-screen {
  background-color: white;
}
</style>