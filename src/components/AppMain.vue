<script>
import {store} from '../store.js'
import loader from './loader.vue'

export default {
    name: 'AppMain',
    data(){
        return{
            store,
            loader
        }
    }
}

</script>

<template>
    <div class="container p-5 bg-white">
        <section class=" my-found bg-dark text-white w-100">
            <p class="p-3 m-0">Found {{ store.listCards.length }} cards</p>
        </section>

        <div class="loading text-center my-5" v-if="store.loading">
            <div class="spinner-border text-dark align-middle" role="status">
                <span class="my-spinner visually-hidden">Loading...</span>
            </div>
        </div>

        <loader v-if="store.loading" />

        <section v-else class="my-cards row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 text-center">
            <div class="col mb-3" v-for="card in store.listCards">
                <div class="img-card" v-for="img in card.card_images">
                    <img :src="img.image_url" :alt="card.name">
                </div>
                <div class="info-card p-2">
                    <h4 class="text-white pt-1">{{ card.name }}</h4>
                    <p>{{ card.archetype }}</p>
                </div>
            </div>
        </section>
    </div>
</template>

<style lang="scss" scoped>
img{
    width: 100%;
}
.info-card{
    background-color: orange;
}
</style>