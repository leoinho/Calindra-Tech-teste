import axios from "axios"

export default class Pesquisa {
    suggestions() {
    return new Promise( (resolve, reject) => {
      axios({
        url: `https://mystique-v2-americanas.juno.b2w.io/autocomplete?content=camiseta&source=nanook`,
        method: "GET"
      })
      .then( res => resolve(res.data.suggestions))
      .catch(() => reject());
    })
  }

    products() {
    return new Promise( (resolve, reject) => {
      axios({
        url: `https://mystique-v2-americanas.juno.b2w.io/autocomplete?content=camiseta&source=nanook`,
        method: "GET"
      })
      .then( res => resolve(res.data.products))
      .catch(() => reject());
    })
  }
}