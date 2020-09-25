const db = require('../config/db')

// 查
function followMsel (params){
    let sql = 'select userby_id from follow where user_id=?;'
    return db.query(sql,[params.user_id])
}

// 增
function followMadd (params){
    let time = (new Date()).getTime();
    console.log(time);
    let sql = 'insert into follow (user_id,userby_id,time) values (?,?,?);'
    return db.query(sql,[params.user_id,params.userby_id,time])
}

// 删
function followMdel (params){
    let sql = 'delete from follow where user_id=? and userby_id=?;';
    return db.query(sql,[params.user_id,params.userby_id])
}

// 存入时间戳


module.exports = {
    followMsel,
    followMadd,
    followMdel,
}