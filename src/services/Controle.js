import axios from 'axios'
import { path } from '../aux/path.js'

export default class Controle {
  dia () {
    return axios.get(`${path()}/controle-dia`)
      .then(res => res.data)
  }

  semana () {
    return axios.get(`${path()}/controle-semana`)
      .then(res => res.data)
  }

  mes () {
    return axios.get(`${path()}/controle-mes`)
      .then(res => res.data)
  }
}
