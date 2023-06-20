<template>
  <div class="Eredivisie-Canvas">
    <div>
      <div v-for="button in buttons" :key="button.id" class="button" @click="handleButtonClick(button)">
        <div>
            <ThreeButtons />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.button {
  background-color: #f3f3f3;
  height: 67vh;
  display: flex;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
}

p {
  color: black;
}

.Eredivisie-Canvas {
  position: relative;
}

</style>

<script>
import ThreeButtons from '@/components/ThreeButtons.vue';

export default {

  components: {
  ThreeButtons
},

  data() {
    return {
      buttons: [
        {
          id: 1,
          route: 'EredivisieView',
        },
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