import Gastos from '../services/gastos/Gastos'

let isOpen = JSON.parse(sessionStorage.getItem('fatura'))

export default ({router}) => {
  router.beforeEach((to, from, next) => {
    let g = new Gastos()
    g.faturaisOpen()

    if (to.meta.faturaOpen && !isOpen.open) {
      next({name: 'fatura'})
    } else {
      next()
    }
  })
}
