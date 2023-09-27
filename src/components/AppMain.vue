<template>
    <main class="py-4">
        <div class="container">
            <select name="cards_selection" id="cards_selections" @click="state.fetchData" :v-model="state.selection">
                <option value="alien" selected>Alien</option>
                <option value="Noble Knight">Noble Knigh</option>
            </select>
        </div>
        <CardList v-if="state"></CardList>

        <div class="container" v-else>
            <div class="sk-circle">
                <div class="sk-circle1 sk-child"></div>
                <div class="sk-circle2 sk-child"></div>
                <div class="sk-circle3 sk-child"></div>
                <div class="sk-circle4 sk-child"></div>
                <div class="sk-circle5 sk-child"></div>
                <div class="sk-circle6 sk-child"></div>
                <div class="sk-circle7 sk-child"></div>
                <div class="sk-circle8 sk-child"></div>
                <div class="sk-circle9 sk-child"></div>
                <div class="sk-circle10 sk-child"></div>
                <div class="sk-circle11 sk-child"></div>
                <div class="sk-circle12 sk-child"></div>
            </div>
        </div>

    </main>
</template>

<script>
import { state } from '../state.js'
import CardList from './CardList.vue';
export default {
    name: 'AppMain',
    data() {
        return {
            state
        };
    },
    created() {
        state.fetchData();
    },
    methods: {},
    components: { CardList }
}
</script>

<style lang="scss" scoped>
@use '../src/assets/scss/partials/variables' as *;
@use '../assets/scss/partials/_loader.scss' as *;


main {
    background: $yugioh__bg;
}
</style>