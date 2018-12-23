import axios from 'axios'
import { path } from '../../aux/path.js'

export default class Gastos {
  getGastosAbertos () {
    return axios.get(`${path()}/gastos-abertos`)
      .then(res => res.data)
  }

  fecharFatura () {
    axios.put(`${path()}/fechar-fatura`)
      .then(res => console.log(res))
  }
}
