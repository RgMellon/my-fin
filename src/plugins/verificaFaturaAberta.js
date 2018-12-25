import { fatIsOpen } from '../aux/fatIsOpen'

export default ({router}) => {
  router.beforeEach((to, from, next) => {
    console.log(fatIsOpen(), 'teste')
    if (to.meta.faturaOpen && fatIsOpen() === false) {

      next({name: 'fatura'})
    } else {
      next()
    }
  })
}
