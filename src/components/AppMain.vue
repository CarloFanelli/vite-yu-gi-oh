<template>
    <main class="py-4">
        <div class="container bg-white">
            <div class="row">
                <div class="my_col" v-for="card in state.cards">
                    <div class="card">
                        <div class="card-header">
                            <img class="w-100" :src='card.card_images.image_url_small' alt="">
                        </div>
                        <div class="card-body">
                            <div class="card_data">
                                <h6>{{ card.name }}</h6>
                                <p>{{ card.archetype }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import { state } from '../state.js'
export default {
    name: 'AppMain',
    data() {
        return {
            state
        }
    },
    created() {
        state.fetchData();
    }
}
</script>

<style lang="scss" scoped>
@use '../src/assets/scss/partials/variables' as *;

main {
    background: $yugioh__bg;
}

.my_col {
    flex: 0 0 auto;
    width: calc(100% / 5);
}
</style>