import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '使用协议',
      component: require('@/views/home').default
    },
    {
      path: '/option',
      name: '七牛云配置',
      component: require('@/views/option').default
    },
    {
      path: '/home',
      redirect: '/home/lists',
      component: require('@/views/chome').default,
      children: [
        {
          path: '/home/lists',
          component: require('@/views/pages/lists').default,
          name: '文章列表',
          children: [
            {
              path: '/home/lists/:id',
              component: require('@/views/pages/content').default
            }
          ]
        },
        {
          path: '/home/new',
          component: require('@/views/pages/new').default,
          name: '新文章'
        },
        {
          path: '/home/md',
          component: require('@/views/pages/md').default,
          name: 'MarkDown语法'
        }
      ]
    },
    {
      path: '/edit/:id',
      component: require('@/views/edit').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
