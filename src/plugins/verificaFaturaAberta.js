import { fatIsOpen } from '../aux/fatIsOpen'

export default ({router}) => {
  router.beforeEach((to, from, next) => {
    if (to.meta.faturaOpen && fatIsOpen() === false) {
      next({name: 'fatura'})
    } else {
      next()
    }
  })
}
