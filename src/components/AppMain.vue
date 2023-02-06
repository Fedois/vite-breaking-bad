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
            <p class="p-3 m-0">Found {{ listCard.length }} cards</p>
        </section>

        <section class="my-cards row row-cols-5 text-center">
            <div class="col mb-3" v-for="(card, index) in listCard">
                <div class="img-card" v-for="img in card.card_images">
                    <img :src="img.image_url" alt="">
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
    height: 100px;
}
</style>