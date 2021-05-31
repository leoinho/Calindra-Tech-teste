<template>
  <div class="produtos">
      <h1>Produtos</h1>
      <div v-for="(item, index) in produtosPesquisados" :key="index">
          <p> <b>Nome:</b> {{ item.name }}</p>
          <p> <b>Tipo:</b> {{ item.type }}</p>
      </div>
      <h1 v-if="produtosPesquisados.length == 0 "> nenhum produto encontrado!</h1>
  </div>
</template>

<script>

export default {
  name: "Produtos",
  data() {
    return {
      produtosPesquisados: [],
    };
  },
  computed: {
    produtos() {
      return this.$store.state.produtos;
    },
    pesquisa() {
      return this.$store.state.pesquisa;
    },
  },
  methods: {},
  mounted: function () {
      if(!this.pesquisa){
          this.$router.push("/");
      }
      this.produtos.map( item =>{
          if(item.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(this.pesquisa)){
              this.produtosPesquisados.push( item)
          }
      })
  },
};
</script>

<style lang="scss"  scoped>

.produtos{
    width: 250px;
    margin: auto;
    div{
        border: solid 1px;
        padding: 5px;
    }
}
</style>
