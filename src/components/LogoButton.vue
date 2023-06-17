<template>
  <div class="home-view">
    <div class="center-container">
      <router-link to="/" class="back-link">
        <img src="@/assets/TheFootballWindmill.png" alt="Back" class="back-image" />
      </router-link>
    </div> 
  </div>
</template>

<style scoped>
.home-view {
  height: 7vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.center-container {
  display: flex;
  justify-content: center;
}

.back-link {
  cursor: pointer;
}

.back-image {
  width: 10vh;
}
</style>
