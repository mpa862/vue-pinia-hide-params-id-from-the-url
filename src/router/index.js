import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/posts',
      name: 'posts',
      component: () => import('../views/Posts.vue')
    },
    {
      path: '/post/:id',
      name: 'postDetail',
      component: () => import('../views/PostsDetail.vue')
    },
    {
      path: '/comments',
      name: 'comments',
      component: () => import('../views/Comments.vue')
    },
    {
      path: '/comment/:id',
      name: 'commentDetail',
      component: () => import('../views/CommentsDetail.vue')
    }
  ]
})

export default router
