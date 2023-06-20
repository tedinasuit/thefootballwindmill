<template>
  <div class="rss-feed">
    <div>
      <ul>
        <li v-for="item in items" :key="item.guid">
          <a :href="item.link" target="_blank">{{ item.title }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Parser from 'rss-parser';

export default {
  data() {
    return {
      title: '',
      items: []
    };
  },
  mounted() {
    this.fetchRssFeed();
  },
  methods: {
    async fetchRssFeed() {
      try {
        const response = await axios.get('https://www.espn.com/espn/rss/soccer/news');
        const parser = new Parser();
        const feed = await parser.parseString(response.data);

        this.title = feed.title;
        this.items = feed.items;
      } catch (error) {
        console.error('Error fetching RSS feed:', error);
      }
    }
  }
};
</script>

<style>
.rss-feed {
  max-height: 50vh;
  max-width: 40vh;
  overflow-y: scroll;
}

a {
  color: black;
  text-decoration: none;
  font-size: 1.5vh;
}

li {
  margin-top: 4vh;
}
</style>