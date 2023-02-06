<script>
export default{
    name: 'AppMain'
}

</script>

<template>
    <div class="container p-5 bg-white">
        <section class=" my-found bg-dark text-white w-100">
            <p class="p-3 m-0">found 39 cards</p>
        </section>

        <section class="my-cards row text-center">
            <div class="col-2">
                <div class="img-card pb-2">
                    <img src="" alt="">
                </div>
                <div class="info-card">
                    <h3 class="text-white">ciao</h3>
                    <p>ciao</p>
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