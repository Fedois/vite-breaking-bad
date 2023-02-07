<script>
export default {
    name: 'loader'
}
</script>

<template>
    <div class="loading text-center my-5" v-if="store.loading">
        <div class="spinner-border text-dark align-middle" role="status">
            <span class="my-spinner visually-hidden">Loading...</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
</style>