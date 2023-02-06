<script>
export default{
    name: 'AppMain',
    props: {
        listCard:{
            type: Array,
            default: [],
        }
        
    }
}

</script>

<template>
    <div class="container p-5 bg-white">
        <section class=" my-found bg-dark text-white w-100">
            <p class="p-3 m-0">found 39 cards</p>
        </section>

        <section class="my-cards row row-cols-5 text-center">
            <div class="col" v-for="card in listCard">
                <div class="img-card">
                    <img :src="card.card_images.image_url" alt="">
                </div>
                <div class="info-card">
                    <h4 class="text-white pt-1">{{ card.name }}</h4>
                    <p>{{ card.archetype }}</p>
                </div>
            </div>
        </section>
    </div>
</template>

<style lang="scss" scoped>
.img-card{
    height: 200px;
    background-color: red;
}
.info-card{
    background-color: orange;
}
</style>