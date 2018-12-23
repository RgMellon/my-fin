import axios from 'axios'
import { path } from '../../aux/path.js'

export default class MaximoGasto {
  defineMaximoValorMaximo (maximo, dias) {
    let gasto = {
      maximo,
      dias
    }
    return axios.post(`${path()}/valor-maximo`, gasto)
      .then(res => res.data)
      .catch((err) => {
        throw new Error('Já existe um controle aberto ' + err.message)
      })
  }
}
