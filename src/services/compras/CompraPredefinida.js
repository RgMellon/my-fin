import axios from 'axios'
import { path } from '../../aux/path'

export default class CompraPredefinida {
  addCompra (compra) {
    return axios.post(`${path()}/predefinido`, compra)
      .then(res => res.data)
  }

  getAll () {
    return axios.get(`${path()}/predefinido`)
      .then(res => res.data)
  }
}
