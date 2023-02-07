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
        <img class="align-middle" src="../assets/172-1722617_yu-gi-oh-cards-logo-hd-png-download.png" alt="">
        <h1 class="align-middle d-inline-block ms-3">Yu-Gi-Oh Api</h1>
    </div>
    <SearchInput />
</template>

<style lang="scss" scoped>
.title > img{
    width: 80px;
}
</style>
