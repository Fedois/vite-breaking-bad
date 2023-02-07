import { reactive } from 'vue'

export const store = reactive({
    listCards: [],
    listArchetypes: [],
    archetypeValue: '',
    nameCardValue: '',
    loading: false
})