<script>
import { state } from '../state'
export default {
    name: 'SearchArch'
}
</script>

<template>
    <div class="container">
        <select name="cards_selection" id="cards_selections">
            <!-- @click="state.fetchData" :v-model="state.selection" -->
            <option value="alien" selected>Alien</option>
            <option value="Noble Knight">Noble Knigh</option>
        </select>
    </div>
</template>

<style lang="scss" scoped></style>