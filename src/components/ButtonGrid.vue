<template>
  <div>
    <div class="button-grid">
      <div v-for="button in buttons" :key="button.id" class="button" @click="handleButtonClick(button)">
        <img :src="button.image" :style="`width: ${button.imageWidth}`" alt="Button Image" class="button-image" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.button-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 20px;
  justify-items: center;
  align-content: flex-start;
  width: 100%;
}

.button {
  background-color: #f3f3f3;
  height: 12vh;
  width: 12vh;
  display: flex;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
}

.button-image {
  max-width: 100%;
  max-height: 100%;
}
</style>

<script>
export default {
  data() {
    return {
      buttons: [
        {
          id: 1,
          image: require('@/assets/Eredivisie.png'),
          imageWidth: '9vh',
          route: 'EredivisieView',
        },
        {
          id: 2,
          image: require('@/assets/button2.png'),
          image: require('@/assets/PremierLeague.png'),
          imageWidth: '10vh',
        },
        {
          id: 3,
          image: require('@/assets/button3.png'),
          image: require('@/assets/Bundesliga.png'),
          imageWidth: '7vh',
        },
        {
          id: 4,
          image: require('@/assets/button4.png'),
          image: require('@/assets/La Liga.png'),
          imageWidth: '8vh',
        },
        {
          id: 5,
          image: require('@/assets/button5.png'),
          image: require('@/assets/SerieA.png'),
          imageWidth: '9vh',
        },
        {
          id: 6,
          image: require('@/assets/button6.png'),
          image: require('@/assets/Ligue1.png'),
          imageWidth: '6vh',
          route: 'LiveScoresView',
        }
      ]
    };
  },

  methods: {
    handleButtonClick(button) {
      if (button.route === '#') {
        // Do nothing or handle a different action for buttons with '#'
      } else {
        this.$router.push({ name: button.route });
      }
    }
  }
};
</script>