import Layout from '@/layout'

// 用户管理 >>> 用户列表/新增用户/用户统计/更新 
export default {
    path: '/user',
    name: 'User',
    component: Layout,
    meta: { title: '用户', icon: 'user' },
    children: [
        {
            path: 'list',
            name: "userList",
            component: () => import('@/views/user/list/index'),
            meta: { title: "用户列表" },
        },
        {
            path: 'add',
            name: "userAdd",
            component: () => import('@/views/user/add/index'),
            meta: { title: "新增商品" },
        },
        {
            path: 'chart',
            name: "userChart",
            component: () => import('@/views/user/chart/index'),
            meta: { title: "用户统计" },
        },

    ]
}