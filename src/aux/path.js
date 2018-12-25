export const path = () => {
  const p = 'prod'
  if (p == 'dev') return 'http://api-fin.herokuapp.com/api'
  else return 'http://localhost:8000/api'
}
