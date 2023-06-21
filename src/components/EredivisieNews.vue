<template>
  <div class="rss-feed">
    <div>
      <ul>
        <li v-for="item in items" :key="item.link">
          <a :href="item.link" target="_blank">
            <img :src="item.image" alt="News Image" v-if="item.image" />
            {{ item.title }}
          </a>
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
    const response = await axios.get('https://rss.app/feeds/wmG4AqIX07ch1z7y.xml');
    const parser = new Parser();
    const feed = await parser.parseString(response.data);

    this.title = feed.title;

    this.items = feed.items.map((item) => {
      const imgTag = document .createElement('div');
      imgTag.innerHTML = item.content;
      const imgElement = imgTag.querySelector('img');
      const imgUrl = imgElement ? imgElement.src : null;

      return {
        title: item.title,
        link: item.link,
        image: imgUrl,
      };
    });
  } catch (error) {
    console.error('Error fetching RSS feed:', error);
  }
}
  }
};
</script>

<style scoped>
.rss-feed {
  max-height: 50vh;
  max-width: 40vh;
  overflow-y: scroll;
  margin-right: clamp(10%, 10%, 20%);;
}

a {
  color: black;
  text-decoration: none;
  font-size: 1.5vh;
  display: flex; 
  align-items: center; 
}

li {
  margin-top: 4vh;
  display: flex; 
  gap: 2vh; 
}

li:not(:last-child) {
  border-bottom: 1px solid #ccc;
  padding-bottom: 2vh; 
}

img {
  max-width: 15vh;
  height: auto; 
  margin-right: 2vh;
}
</style>