<template>
    <div class="button-container" :class="{ expanded: isExpanded }" @click="expandButton">
      <div class="button" v-if="!isExpanded">
        <img src="your-image-url.jpg" alt="Button Image" />
      </div>
      <div class="expanded-content" v-else>
        Test
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isExpanded: false,
      };
    },
    methods: {
      expandButton() {
        this.isExpanded = true;
      },
    },
  };
  </script>
  
  <style scoped>
  .button-container {
    width: 200px; /* Adjust the width as needed */
    height: 200px; /* Adjust the height as needed */
    border-radius: 20px; /* Makes it round */
    background-color: yellow;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.5s; /* Smooth transition animation */
    cursor: pointer;
  }
  
  .button {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .expanded-content {
    width: 100%;
    height: 100%;
    border-radius: 20px;
    background-color: yellow;
  }
  
  .expanded {
    width: 400px; /* Adjust the expanded width as needed */
    height: 400px; /* Adjust the expanded height as needed */
    border-radius: 50%; /* Maintains the same border-radius as the button */
  }
  </style>