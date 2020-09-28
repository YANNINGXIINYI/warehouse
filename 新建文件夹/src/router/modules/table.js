import Layout from '@/layout'

export default   {
    path:'/table',
    name:'Table',
    component:Layout,
    meta:{tite:"表格"},
    redirect:'/table/table',
    children:[
      {path:'table',component:()=>import('@/views/table/index'),meta:{title:'表格'}}
    ]
  }