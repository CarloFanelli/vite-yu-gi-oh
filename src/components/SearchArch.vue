<script>
import { state } from '../state'

export default {
    name: 'SearchArch',
    emits: ['performSearch'],

    data() {
        return {
            state,
        }
    },

}
</script>

<template>
    <div class="container d-flex justify-content-center align-items-center">
        <select name="cards_selection" id="cards_selections" v-model="state.searchArch" @change="$emit('performSearch')">
            <option value="">select an arch</option>
            <option v-for="archetype in state.archetypes" :value="archetype.archetype_name">{{
                archetype.archetype_name }}</option>
            <!-- <option value="Noble Knight">Noble Knigh</option> -->
        </select>
        <div class="counter">
            <p>sono stati trovati elementi</p>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>