const express = require('express');
const router = express.Router();

// 查
router.get('/list', require('./list'));

// 增
router.post('/add', require('./add'));

// 删
router.get('/del', require('./del'));

// 改
router.post('/modify', require('./modify'));

module.exports = router;