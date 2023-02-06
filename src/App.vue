<script>
import axios from 'axios'
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppMain,
  },
  created(){
    axios
    .get('https://db.ygoprodeck.com/api/v7/cardinfo.php')
    .then((response) => {
      console.log(response.data.data)
    })
  }
}
</script>

<template>
    <AppHeader />
    <AppMain />
</template>

<style lang="scss">
@use "./style/main.scss";
body{
  background-color: orange;
}
</style>
