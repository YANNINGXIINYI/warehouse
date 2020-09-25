const createError = require('http-errors');
module.exports = function(){
    return function(req,res,next){
        next(createError(404))
    }
}