import { path } from '../../aux/path.js'
import axios from 'axios'

export default class Categoria {
  getCategoria () {
    return axios.get(`${path()}/categorias`)
      .then(res => res.data)
  }

  adicionarCategoria (cat) {
    let c = {
      categoria: cat.toLowerCase()
    }

    return axios.post(`${path()}/categorias`, c)
      .then(res => res.data)
  }

  deleteCat (item) {
    return axios.delete(`${path()}/categorias`, {
      params: {
        'id': item
      }
    }).then(res => res.data)
  }
}
