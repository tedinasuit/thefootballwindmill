<template>
  <LogoButton />
  <router-view/>
</template>

<script>
import LogoButton from '@/components/LogoButton.vue';

export default {

  components: {
    LogoButton,
  },

};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #ffffff;
}

nav a.router-link-exact-active {
  color: #42b983;
}

body {
  background-color: rgb(56, 55, 55);
}
</style>
