<script>
import { state } from '../state'

import SingleCard from './SingleCard.vue'

export default {
    name: 'CardList',
    components: {
        SingleCard,
    },
    data() {
        return {
            state
        }
    },

}
</script>

<template>
    <div class="container bg-white">
        <div class="row p-2">
            <SingleCard v-for="card in state.cards" :card="card"></SingleCard>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>