import { serve } from '@/utils/request'

export function getShopList(data) {
    return serve({
        url: "/goodList",
        method: 'get',
        params: data
    })
}

export function deleltShop(data) {
    return serve({
        url: '/delShopList',
        method: 'get',
        params: data  // 请求参数id
    })
}
export function addShop(data) {
    // return serve.post('/addShopList',{title:"aaa"})
    return serve({
        url: "/addShopList",
        method: "post",
        data: data,
        headers: {
            // 作用：告诉服务器；表单提交的数据为 form 表单默认格式数据；
            // 'Content-Type': 'application/x-www-form-urlencoded',
            // 告诉服务器；请求体提交的数为 json字符串
            // 'Content-Type':'application/json'
            // 告诉服务器；表单提交数据有二进制文件：图片，歌曲
            'Content-Type':'multipart/form-data'

        }
    })
}

// 