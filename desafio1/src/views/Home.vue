<template>
  <div class="home">
    <h1>Pesquisa de produtos</h1>
    <Pesquisa />
  </div>
</template>

<script>
import Pesquisa from '@/components/Pesquisa.vue'

export default {
  name: 'Home',
  components: {
    Pesquisa
  }
}
</script>
<style  scoped>

h1{
    text-align: center;
    text-transform: uppercase;
}
</style>
