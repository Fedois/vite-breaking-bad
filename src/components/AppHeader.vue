<script>
import { store } from '../store.js'
import axios from 'axios'
import SearchInput from './SearchInput.vue'

export default {
    name: 'AppHeader',
    components: {
        SearchInput,
    },
    data(){
        return{
            store
        }
    },
    methods:{
        getCards(){
            this.store.loading = true
            
            if(this.store.archetypeValue == ''){
                axios
                    .get('https://db.ygoprodeck.com/api/v7/cardinfo.php?')
                    .then((response) => {
                        this.store.listCards = response.data.data.slice(0,100);
                        console.log(this.store.listCards)

                        this.store.loading = false
                    })
            }
            else{
                axios
                    .get('https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=' + this.store.archetypeValue)
                    .then((response) => {
                        this.store.listCards = response.data.data.slice(0,100);
                        console.log(this.store.listCards)

                        this.store.loading = false
                    })
            }
        }
    },
    created(){
        axios
            .get('https://db.ygoprodeck.com/api/v7/archetypes.php')
            .then((response) => {

            this.store.listArchetypes = response.data;
            console.log(this.store.listArchetypes)
        })
        
        this.getCards()
  }
}
</script>

<template>
    <div class="title py-2 px-4 bg-white">
        <img class="align-middle" src="../assets/172-1722617_yu-gi-oh-cards-logo-hd-png-download.png" alt="">
        <h1 class="align-middle d-inline-block ms-3">Yu-Gi-Oh Api</h1>
    </div>
    <SearchInput @search="getCards" />
</template>

<style lang="scss" scoped>
.title > img{
    width: 80px;
}
</style>
