<template>
    <main class="py-4">
        <div class="container">
            <select name="cards_selection" id="cards_selections" :v-model="state.selection">
                <option value="alien" selected>Alien</option>
                <option value="Noble Knight">Noble Knigh</option>
            </select>
        </div>
        <div class="container bg-white" v-if="state">
            <div class="row p-2">
                <div class="my_col p-1" v-for=" card  in   state.cards  " v-show="card.archetype = 'Alien'">
                    <div class="card my-2 h-100">
                        <div class="card-header p-0">
                            <img class="w-100" :src='card.card_images[0].image_url' alt="">
                        </div>
                        <div class="card-body d-flex flex-column justify-content-center align-items-center p-1">
                            <div class="card_data">
                                <p>{{ card.name }}</p>
                                <span>{{ card.archetype }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
export default {
    name: 'AppMain',
    data() {
        return {
            state
        }
    },
    created() {
        state.fetchData();
    },
    methods: {

    },
}
</script>

<style lang="scss" scoped>
@use '../src/assets/scss/partials/variables' as *;
@use '../assets/scss/partials/_loader.scss' as *;


main {
    background: $yugioh__bg;
}

.my_col {
    flex: 0 0 auto;
    width: calc(100% / 5);
}

.card_data {
    height: auto;
    text-align: center;

    p {
        color: $yugioh__card_name;
        margin: 0;
        font-size: 0.8rem;
        text-transform: uppercase;
        letter-spacing: -0.5px;
        font-weight: 600;
    }

    span {
        font-weight: 300;
        font-size: 0.8rem;

    }
}
</style>