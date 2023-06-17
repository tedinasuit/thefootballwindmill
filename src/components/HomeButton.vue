<template>
  <div>
    <div class="bottom-container">
      <router-link to="/" class="back-link">
        <img src="@/assets/Windmill.png" alt="Back" class="back-image" />
      </router-link>
    </div> 
  </div>
</template>

<style scoped>
.bottom-container {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 20px;
  display: flex;
  justify-content: center;
}

.back-link {
  cursor: pointer;
}

.back-image {
  width: 8vh;
}
</style>