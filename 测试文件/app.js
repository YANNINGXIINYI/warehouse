const express = require('express');
const app = express();
const fomidable = require('express-formidable');
const {followR} = require('./routes')
const {port} = require('./config/config')

app.use(fomidable());
app.use('/follow',followR);
app.listen(port,()=>{
    console.log('node is ok');
});

