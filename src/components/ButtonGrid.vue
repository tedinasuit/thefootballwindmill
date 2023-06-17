<template>
  <div>
    <div class="button-grid">
      <div v-for="button in buttons" :key="button.id" class="button">
        <img :src="button.image" alt="Button Image" class="button-image" />
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
  margin-top: 2vh;
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
          image: require('@/assets/button1.png')
        },
        {
          id: 2,
          image: require('@/assets/button2.png')
        },
        {
          id: 3,
          image: require('@/assets/button3.png')
        },
        {
          id: 4,
          image: require('@/assets/button4.png')
        },
        {
          id: 5,
          image: require('@/assets/button5.png')
        },
        {
          id: 6,
          image: require('@/assets/button6.png')
        }
      ]
    };
  }
};
</script>