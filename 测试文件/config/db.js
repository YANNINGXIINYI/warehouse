const mysql = require('mysql');
const { mysqlConfig } = require('../config/config')
const pool = mysql.createPool(mysqlConfig);

let db = {};
db.query = function(sql,params){
    return new Promise((resolve,reject)=>{
        pool.getConnection(function(err,Connection){
            if(err){
                reject({
                    code:"5000",
                    message:"服务器出现了问题，获取数据库连接失败"
                })
                return 
            }
            if(typeof sql !=='string' || !Array.isArray(params)){
                reject({
                    code:'5005',
                    message:'服务器问题，sql，params类型错误'
                })
            }
            Connection.query(sql,params,function(err,data){
                if(err){
                    reject({
                        code:'5005',
                        message:'服务器问题，数据库返回的错误',
                        err,
                    })
                    return
                }
                resolve(data)
            })
        })
    })
}
module.exports = db