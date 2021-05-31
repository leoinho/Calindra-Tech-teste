<template>
  <div class="">
    <div class="pesquisa">
        <input
        class="campos-input"
        type="text"
        placeholder=" Pesquisar"
        autocomplete="nope"
        v-model="texto"
        @keyup="fechaSujestoes"
        @click="abreSujestoes"
        />
        <button :disabled="texto == ''" @click="pesquisar">pesquisar</button>
        <div v-if="mostrarSugestoes">
            <ul v-for="(item, index) in sugestoes" :key="index">
                <li @click="texto = item.term, mostrarSugestoes = false">{{ item.term }}</li>
            </ul>
        </div>
    </div>
  </div>
</template>

<script>
import Pesquisa from "../api/pesquisa";
const pesquisa = new Pesquisa();

export default {
  name: "Pesquisa",
  data() {
    return {
      texto: "",
      mostrarSugestoes: false,
    };
  },
  computed: {
    sugestoes() {
      return this.$store.state.sugestoes;
    },
  },
  methods: {
    pesquisarSugestoes() {
      pesquisa
        .suggestions()
        .then((res) => {
          this.$store.commit("SET_SUGESTOES", res);
        })
        .catch(() => {
          console.log("ocorreu um erro");
        });
    },
    abreSujestoes() {
      this.mostrarSugestoes = !this.mostrarSugestoes
    },
    fechaSujestoes() {
      this.mostrarSugestoes = false
    },
    pesquisar() {
        this.$store.commit("SET_PESQUISA", this.texto);
      pesquisa
        .products()
        .then((res) => {
          this.$store.commit("SET_PRODUTOS", res);
          this.$router.push("/produtos");
        })
        .catch(() => {
          console.log("ocorreu um erro");
        });
    },
  },
  mounted: function () {
    this.pesquisarSugestoes();
  },
};
</script>

<style lang="scss"  scoped>
.pesquisa{
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 250px;
    margin: auto;
    button{
        position: absolute;
        right: -77px;
        top: 4px;
    }
    div{
        width: 100%;
        border-left: solid 1px #707070;
        border-bottom: solid 1px #707070;
        border-right: solid 1px #707070;
    }
    .campos-input{
        border: solid 1px #707070;
        border-radius: 10px;
        padding: 6px;
        width: 235px;
    }
    li {
    list-style-type: none;
    cursor: pointer;

    &:hover{
        color: blue;
    }
    }
}
</style>
