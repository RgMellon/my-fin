import axios from 'axios'
import { path } from '../../aux/path.js'

export default class Compra {
  abater (compra) {
    return axios.post(`${path()}/compra`, compra)
      .then(res => console.log(res.data))
  }

  comprasAberto () {
    return axios.get(`${path()}/compra`)
  }

  deleteCompra (id) {
    return axios.delete(`${path()}/compra`, {
      params: { 'id': id }
    })
  }
}
