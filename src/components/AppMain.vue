<script>
import allCards from './allCards.vue'

export default {
    name: 'AppMain',
    components: {
        allCards
    }
}

</script>

<template>
    <div class="container p-5 bg-white">
        <section class=" my-found bg-dark text-white w-100">
            <p class="p-3 m-0">found 39 cards</p>
        </section>

        <section class="my-cards row text-center">
            <div class="col-2">
                <allCards />
            </div>
        </section>
    </div>
</template>

<style lang="scss" scoped>

</style>