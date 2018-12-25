import { fatIsOpen } from '../aux/fatIsOpen'
import Gastos from '../services/gastos/Gastos'

export default ({router}) => {
  router.beforeEach((to, from, next) => {
    let g = new Gastos()
    g.faturaisOpen()

    if (to.meta.faturaOpen && fatIsOpen() === false) {
      next({name: 'fatura'})
    } else {
      next()
    }
  })
}
