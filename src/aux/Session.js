
export default class Session {
  setSession (valor) {
    sessionStorage.setItem('fatura',
      JSON.stringify({
        'open': valor
      }))
  }

  getSession (key) {
    return JSON.parse(sessionStorage.getItem(key))
  }
}
