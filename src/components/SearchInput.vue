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
         <form action="">
            <select class="p-1 border-0 rounded" name="select" id="select" v-model="store.archetypeValue" @change="$emit('search')">
                <option value="">allCards</option>
                <option v-for="archetype in store.listArchetypes" 
                :value="archetype.archetype_name">{{ archetype.archetype_name }} 
                </option>
            </select>
        </form>
    </div>
   
</template>

<style lang="scss" scoped>
select{
    width: 130px;
}
</style>