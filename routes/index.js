var express = require('express');
var router = express.Router();
var mongodb = require('../database/connectMongoDB');
/* GET home page. */
router.get('/', function(req, res, next) {
    mongodb.userModel.find({ name: 'wiliam' }, function(error, docs) {
        if (error) {
            console.log('error :' + error);
            res.render('index', { title: 'Express', msg: '查询出错啦' + docs });
        } else {
            console.log(docs);
            console.log('查询成功');
            res.render('index', { title: 'Express', msg: '查出数据啦' + docs[0].name });
        }
    });
});
module.exports = router;