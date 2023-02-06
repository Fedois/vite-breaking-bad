<script>
export default {
    name: 'SearchInput'
}
</script>

<template>
    <div class="input m-auto p-4">
         <form action="">
            <select class="p-1" name="select" id="select">
                <option value="alien">alien</option>
            </select>
        </form>
    </div>
   
</template>

<style lang="scss" scoped>
.input{
    width: 1400px;

    select{
        width: 130px;
    }
}
</style>