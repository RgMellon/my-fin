import Gastos from '../services/gastos/Gastos'

// leave the export, even if you don't use it
export default ({ app, router, Vue }) => {
  let g = new Gastos()
  g.faturaisOpen()
}
