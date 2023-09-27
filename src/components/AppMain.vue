<template>
    <main class="py-4">
        <SearchArch></SearchArch>
        <CardList v-if="state"></CardList>
        <AppLoader v-else></AppLoader>



    </main>
</template>

<script>
import { state } from '../state.js';
import AppLoader from './AppLoader.vue';
import CardList from './CardList.vue';
import SearchArch from './SearchArch.vue';


export default {
    name: 'AppMain',
    data() {
        return {
            state
        };
    },
    methods: {

        searchArch() {
            console.log(state.searchArch);
            console.log('ciao');
        }

    },
    created() {
        /* setTimeout(() => {

            state.fetchData();

        }, 2000), */

        state.fetchData(),

            state.fetchArch()


    },
    methods: {},
    components: { CardList, AppLoader, SearchArch }
}
</script>

<style lang="scss" scoped>
@use '../src/assets/scss/partials/variables' as *;


main {
    background: $yugioh__bg;
}
</style>