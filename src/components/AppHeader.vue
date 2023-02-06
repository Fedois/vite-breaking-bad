<script>
import SearchInput from './SearchInput.vue'
export default {
    name: 'AppHeader',
    components: {
        SearchInput,
    }
}
</script>

<template>
    <div class="title py-2 px-4 bg-white">
        <h1>Yu-Gi-Oh Api</h1>
    </div>
    <SearchInput />
</template>

<style lang="scss" scoped>
</style>
