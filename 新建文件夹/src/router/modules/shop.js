import Layout from '@/layout'
// 在原有的slider 新增了 slder
export default {
    path: '/shop',
    name: 'Shop',
    component: Layout,
    redirect:"/shop/list",
    meta: { title: '商品管理', icon: "wyh" },
    children: [
        {
            path: 'list',
            name: "shopList",
            component: () => import('@/views/shop/list/index'),
            meta: { title: "商品列表" },
        },
        {
            path: 'add',
            name: "shopAdd",
            component: () => import('@/views/shop/add/index'),
            meta: { title: "新增商品" },
        },
    ]
}