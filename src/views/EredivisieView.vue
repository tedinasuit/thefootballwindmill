<template>
  <div class="gap">

  </div>
  <EredivisieCanvas />
  <HomeButton />
</template>

<script>
import HomeButton from '@/components/HomeButton.vue';
import EredivisieCanvas from '@/components/EredivisieCanvas.vue';

export default {

components: {
  EredivisieCanvas,
  HomeButton
},


data() {

  return {
    
  };
}
};


</script>

<style>
.gap{
  height: 30px;
}
</style>