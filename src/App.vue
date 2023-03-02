<template>
  <Header />
  <div class="test"></div>
  
</template>

<script>

import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    
    Header
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: inherit;
}
html{
  font-size: 62.5%;
}
.test{
  width: 100px;
  aspect-ratio: 1;
}

body{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  box-sizing: border-box;
  font-size: 1.6rem;
}
</style>
