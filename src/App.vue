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
      console.log(response.data.data)
      this.store.listCards = response.data.data.slice(0,20);
    })
  }
}
</script>

<template>
    <AppHeader />
    <AppMain :listCard = "store.listCards"/>
</template>

<style lang="scss">
@use "./style/main.scss";
body{
  background-color: orange;
}
</style>
