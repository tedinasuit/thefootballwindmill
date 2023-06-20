<template>
  <div class="live-scores">
    <ul>
      <li v-for="match in matches" :key="match.id">
        {{ match.homeTeam }} vs {{ match.awayTeam }}: {{ match.score }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      matches: []
    };
  },
  mounted() {
    this.fetchLiveScores();
  },
  methods: {
    async fetchLiveScores() {
      try {
        const response = await axios.get('https://api.football-data.org/v2/matches', {
          headers: {
            'X-Auth-Token': '9359c605afb94221bd0de543c02f0885'
          },
          params: {
            status: 'LIVE'
          }
        });
        this.matches = response.data.matches;
      } catch (error) {
        console.error('Error fetching live scores:', error);
      }
    }
  }
};
</script>

<style scoped>
.live-scores {

}
</style>