const {followMadd,followMdel,followMsel} = require('../models/follow')

// 查询
function followCsel(req,res){
    // 1.验证是否传参
    // 2.验证参数是否合法
    // 3.查询对应数据
    let params = req.fields;
    console.log(params);
    followMsel(params).then(data=>{
        res.json({
            code:'2000',
            message:'查询关注成功',
            data,
        })
    }).catch((err)=>{
        res.json(err)
    })
}

// 增加
function followCadd (req,res){
    // 接收请求参数
    // 1.验证是否传参
    // 2.验证参数是否合法
    // 3.查询关系是否存在
    // 4.新建成功，存入时间戳
    let params = req.fields;
    console.log(params);
    followMadd(params).then(data=>{
        
        res.json({
            code:'2000',
            message:'新建关注成功',
            data:data
        })
    }).catch((err)=>{
        res.json(err)
    })
}

// 删除
function followCdel(req,res){
    // 1.验证是否传参
    // 2.验证参数是否合法
    // 3.删除数据
    let params = req.fields;
    console.log(params);
    followMdel(params).then(data=>{
        res.json({
            code:'2000',
            message:'删除关注成功',
            data:data
        })
    }).catch((err)=>{
        res.json(err)
    })
}

module.exports = {
    followCsel,
    followCadd,
    followCdel
}
