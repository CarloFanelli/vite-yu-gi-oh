<script>
import AppHeader from './components/AppHeader.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
  }
}

</script>

<template>
  <AppHeader></AppHeader>

  <main>
    <div class="container bg-white">
      <div class="row">
        <div class="col-6 col-md-2">
          <div class="card">
            <div class="card-header">
              <img class="w-100" src="https://upload.wikimedia.org/wikipedia/commons/2/21/Yu-Gi-Oh%21.png" alt="">
            </div>
            <div class="card-body">
              <h1>ciao</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>

  <footer>

  </footer>
</template>

<style lang="scss">
@use '../src/assets/scss/partials/variables' as *;

main {
  background: $yugioh__bg;
}

.card {
  background: $yugioh__bg;
}
</style>
