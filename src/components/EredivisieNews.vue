<template>
  <div class="news-feed">
    <div v-if="isLoading" class="loading-message">Loading...</div>
    <div v-else-if="newsItems.length === 0" class="no-news-message">No news available.</div>
    <div v-else class="news-items">
      <div v-for="item in newsItems" :key="item.link" class="news-item">
        <h2>{{ item.title }}</h2>
        <p>{{ item.contentSnippet }}</p>
        <a :href="item.link" target="_blank">Read more</a>
      </div>
    </div>
  </div>
</template>

<script>
import Parser from 'rss-parser';

export default {
  data() {
    return {
      newsItems: [], // Holds the fetched news data
      isLoading: true, // Indicates if the data is currently being fetched
    };
  },
  mounted() {
    // Fetch the Eredivisie news data from the RSS feed
    this.fetchNewsData();
  },
  methods: {
    async fetchNewsData() {
      const parser = new Parser();
      try {
        const feed = await parser.parseURL('https://www.espn.com/espn/rss/soccer/news'); // Place the RSS feed URL
        this.newsItems = feed.items;
      } catch (error) {
        console.error('Error fetching RSS feed:', error);
      } finally {
        this.isLoading = false;
      }
    },
  },
};
</script>

<style scoped>
.no-news-message {
  color: black;
}
</style>