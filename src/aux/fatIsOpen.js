import Session from './Session'

export const fatIsOpen = () => {
  let s = new Session()
  let open = s.getSession('fatura')
  if (open.open === true) return true
  else return false
}
