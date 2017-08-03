/**
 * Created by dllo on 17/8/3.
 */
var express = require('express');
var router = express.Router();
router.get('/',function (res,req) {
    //让response渲染页面,views/page
    req.render('page',{page:'FEI页'})
})

module.exports = router;