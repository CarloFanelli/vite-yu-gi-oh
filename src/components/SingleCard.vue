<script>
export default {
    name: 'SingleCard',
    props: {
        card: Object
    }

}
</script>

<template>
    <div class="my_col p-1">
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
</template>

<style lang="scss" scoped>
@use '../src/assets/scss/partials/variables' as *;

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