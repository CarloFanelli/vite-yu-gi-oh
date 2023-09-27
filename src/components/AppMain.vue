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

        filterArch() {
            console.log(state.searchArch);
            //console.log(this.state.base_url);
            const archUrl = 'https://db.ygoprodeck.com/api/v7/cardinfo.php?' + `archetype=${state.searchArch}&` + 'num=1000&offset=0';
            console.log(archUrl);
            state.fetchData(archUrl);
        }

    },
    created() {
        /* setTimeout(() => {

            state.fetchData();

        }, 2000), */

        state.fetchData(this.state.base_url),

            state.fetchArch()


    },
    components: { CardList, AppLoader, SearchArch }
}
</script>

<template>
    <main class="py-4">

        <SearchArch @performSearch="filterArch"></SearchArch>

        <CardList v-if="state"></CardList>
        <AppLoader v-else></AppLoader>



    </main>
</template>

<style lang="scss" scoped>
@use '../src/assets/scss/partials/variables' as *;


main {
    background: $yugioh__bg;
}
</style>