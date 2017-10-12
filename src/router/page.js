export default [
  {
    path: '/',
    component: resolve => require(['../views/home'], resolve),
    children: [
      {
        path: 'home',
        component: resolve => require(['../views/home'], resolve)
      }
    ]
  },
  {
    path: '/config',
    component: resolve => require(['../views/config'], resolve),
    children: [
      {
        path: 'ads',
        component: resolve => require(['../views/config/ads'], resolve)
      },
      {
        path: 'params',
        component: resolve => require(['../views/config/params'], resolve)
      }
    ]
  },
  {
    path: '/product',
    component: resolve => require(['../views/product'], resolve),
    children: [
      {
        path: 'list',
        component: resolve => require(['../views/product/list'], resolve)
      },
      {
        path: 'add',
        component: resolve => require(['../views/product/add'], resolve)
      }
    ]
  }
]