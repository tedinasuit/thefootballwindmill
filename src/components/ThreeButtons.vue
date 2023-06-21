<template>
  <div class="three-buttons-container">
    <div class="component-container">
      <EredivisieTable v-if="activeComponent === 1" />
      <EredivisieFixtures v-if="activeComponent === 2" />
      <EredivisieNews v-if="activeComponent === 3" />
    </div>

    <div class="button-grid">
      <div v-for="button in buttons" :key="button.id" :class="['button', { 'active-button': isActiveButton(button.id) }]" @click="handleButtonClick(button)">
        {{ button.label }}
      </div>
    </div>
  </div>
</template>

<style scoped>

.active-button {
  color: yellow;
}

.button-grid {
  position: absolute;
  bottom: 1vh;
  left: 0;
  width: 100%;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(1, 1fr);
  gap: 20px;
  justify-items: center;
  align-content: flex-start;
}

.button {
  background-color: rgb(56, 55, 55);
  height: 5vh;
  width: 10vh;
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
import EredivisieTable from '@/components/EredivisieTable.vue';
import EredivisieFixtures from '@/components/EredivisieFixtures.vue';
import EredivisieNews from '@/components/EredivisieNews.vue';


export default {
    data() {
        return {
            buttons: [
                {
                    id: 1,
                    label: "Table",
                },
                {
                    id: 2,
                    label: "Fixtures"
                },
                {
                    id: 3,
                    label: "News"
                },
            ],
            activeComponent: 1 // Initially the Table component is active
        };
    },
    methods: {
      handleButtonClick(button) {
      this.activeComponent = button.id; // Set the active component based on the clicked button
    },
    isActiveButton(buttonId) {
      return this.activeComponent === buttonId;
    }
    },
    components: { 
      EredivisieTable, 
      EredivisieFixtures,
      EredivisieNews
    }
};
</script>