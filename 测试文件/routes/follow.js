const express = require('express');
const router = express.Router();
const {followCsel,followCadd,followCdel} = require('../controls/follow')

// 查
router.post('/sel',followCsel)
// 增
router.post('/add',followCadd)
// 删
router.post('/del',followCdel)



module.exports = router

