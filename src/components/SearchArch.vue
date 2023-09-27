<script>
import { state } from '../state'

export default {
    name: 'SearchArch',
    emits: ['searchArch'],
    /* created() {
        state.fetchArch
    }, */
    data() {
        return {
            state,
        }
    }
}
</script>

<template>
    <div class="container">
        <select name="cards_selection" id="cards_selections" :v-model="state.searchArch" @change="$emit('searchArch')">
            <option value="">select an arch</option>
            <option value="alien">Alien</option>
            <option value="Noble Knight">Noble Knigh</option>
        </select>
    </div>
</template>

<style lang="scss" scoped></style>