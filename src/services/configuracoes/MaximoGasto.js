import axios from 'axios'
import { path } from '../../aux/path.js'
import Session from '../../aux/Session';

export default class MaximoGasto {
  defineMaximoValorMaximo (maximo, dias) {
    let gasto = {
      maximo,
      dias
    }
    return axios.post(`${path()}/valor-maximo`, gasto)
      .then(res => {
        let s = new Session()
        s.setSession(true)
      })
      .catch((err) => {
        throw new Error('Já existe um controle aberto ' + err.message)
      })
  }
}
