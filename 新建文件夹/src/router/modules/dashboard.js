import Layout from '@/layout'

export default {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        meta: { title: '用户信息', icon: 'dashboard' }
    }]
}