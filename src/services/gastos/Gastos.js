import axios from 'axios'
import { path } from '../../aux/path.js'

export default class Gastos {
  getGastosAbertos () {
    return axios.get(`${path()}/gastos-abertos`)
      .then(res => res.data)
  }

  fecharFatura () {
    return axios.put(`${path()}/fechar-fatura`)
      .then(res => this.setSession(false))
  }

  faturaisOpen () {
    this.getGastosAbertos()
      .then(res => this.setSession(true))
      .catch(err => this.setSession(false))
  }

  setSession (valor) {
    sessionStorage.setItem('fatura',
      JSON.stringify({
        'open': valor
      }))
  }
}
