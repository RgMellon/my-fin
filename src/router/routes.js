
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '',
        component: () => import('pages/datas/dia.vue')
      },

      { path: 'mes',
        component: () => import('pages/datas/mes.vue')
      },

      { path: 'semana',
        component: () => import('pages/datas/semana.vue')
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
      { path: '/',
        component: () => import('pages/configuracoes'),
        meta: { faturaOpen: true }
      },
      { path: 'gasto-mes',
        component: () => import('pages/config/gasto-mes.vue'),
        meta: { faturaOpen: true }
      },
      { path: 'lista-gasto',
        component: () => import('pages/config/lista-gasto.vue'),
        meta: { faturaOpen: true }
      },
      { path: 'fecha-conta',
        component: () => import('pages/config/fecha-conta.vue'),
        meta: { faturaOpen: true }
      },
      { path: 'categoria',
        component: () => import('pages/config/categoria.vue'),
        meta: { faturaOpen: true }
      }
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
