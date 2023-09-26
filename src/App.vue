<script>
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppMain
  }
}

</script>

<template>
  <AppHeader></AppHeader>

  <AppMain></AppMain>

  <footer>

  </footer>
</template>

<style lang="scss">
@use '../src/assets/scss/partials/variables' as *;



.card {
  background: $yugioh__bg;
}
</style>
