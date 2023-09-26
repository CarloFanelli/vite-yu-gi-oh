<template>
    <main class="py-4">
        <div class="container bg-white">
            <div class="row">
                <div class="col-6 col-md-2" v-for="card in state.cards">
                    <div class="card">
                        <div class="card-header">
                            <img class="w-100" src="https://upload.wikimedia.org/wikipedia/commons/2/21/Yu-Gi-Oh%21.png"
                                alt="">
                        </div>
                        <div class="card-body">
                            <h1>{{ card.name }}</h1>
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
</style>