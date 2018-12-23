
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '',
        component: () => import('pages/datas/dia.vue'),
        meta: { faturaOpen: true }
      },

      { path: 'mes',
        component: () => import('pages/datas/mes.vue'),
        meta: { faturaOpen: true }
      },

      { path: 'semana',
        component: () => import('pages/datas/semana.vue'),
        meta: { faturaOpen: true }
      }
    ]
  },

  {
    path: '/adiciona',
    component: () => import('layouts/LayoutTwo.vue'),
    children: [
      { path: 'despesas',
        component: () => import('pages/adicionar-despesas.vue'),
        meta: { faturaOpen: true }
      }
    ]
  },
  {
    path: '/fatura',
    component: () => import('layouts/Fatura.vue'),
    children: [
      { path: '',
        component: () => import('pages/adicionar-fatura.vue'),
        name: 'fatura'
      }
    ]
  },
  {
    path: '/config',
    component: () => import('layouts/Config.vue'),
    children: [
      { path: '/', component: () => import('pages/configuracoes') },
      { path: 'gasto-mes', component: () => import('pages/config/gasto-mes.vue') },
      { path: 'lista-gasto', component: () => import('pages/config/lista-gasto.vue') },
      { path: 'fecha-conta', component: () => import('pages/config/fecha-conta.vue') },
      { path: 'categoria', component: () => import('pages/config/categoria.vue') }
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
