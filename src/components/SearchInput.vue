<script>
import { store } from '../store.js'
export default {
    name: 'SearchInput',
    data(){
        return{
            store
        }
    }
}
</script>

<template>
    <div class="input ms-5 p-4">
         <form action="" @submit.prevent="$emit('search')">
            <select class="p-1 border-0 rounded" name="select" id="select" v-model="store.archetypeValue">
                    <option v-for="(archetype, index) in store.listArchetypes" 
                    :value="archetype.archetype_name">{{ archetype.archetype_name }} 
                </option>
            </select>
            
            <button class="ms-3" type="submint">search</button>
        </form>
    </div>
   
</template>

<style lang="scss" scoped>
select{
    width: 130px;
}
</style>