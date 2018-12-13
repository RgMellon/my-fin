
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/datas/dia.vue') },
      { path: 'mes', component: () => import('pages/datas/mes.vue') },
      { path: 'semana', component: () => import('pages/datas/semana.vue') }
    ]
  },
  {
    path: '/adiciona',
    component: () => import('layouts/LayoutTwo.vue'),
    children: [
      { path: 'despesas', component: () => import('pages/adicionar-despesas.vue') }

    ]
  },
  {
    path: '/config',
    component: () => import('layouts/Config.vue'),
    children: [
      { path: '/', component: () => import('pages/configuracoes') },
      { path: 'gasto-mes', component: () => import('pages/config/gasto-mes.vue') }

    ]
  }
]

if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
