<script>
import { store } from './store.js'
import axios from 'axios'
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

export default {
    name: 'App',
    components: {
      AppHeader,
      AppMain,
  },
  data(){
    return{
      store
    }
  },
  created(){
    axios
    .get('https://db.ygoprodeck.com/api/v7/cardinfo.php?&fname=Alien')
    .then((response) => {
      this.store.listCards = response.data.data.slice(0,20);
      console.log(this.store.listCards)
    })

    axios
    .get('https://db.ygoprodeck.com/api/v7/archetypes.php')
    .then((response) => {
      this.store.listArchetypes = response.data.slice(0,20);
      console.log(this.store.listArchetypes)
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
