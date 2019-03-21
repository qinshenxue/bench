var express = require('express');
var router = express.Router();

const knex = require('../db/index')

/* GET home page. */
router.get('/', function (req, res, next) {

    knex.select().where({status:1}).from('apps').then(function (doc) {

        res.render('index', {
            title: 'Express',
            apps: doc
        });
    })


});



const multer = require("multer");
const mime = require("mime");
const storage = multer.diskStorage({
    destination: function (req, file, cb) {

        cb(null, "./upload/");

    },
    filename: function (req, file, cb) {
        cb(null, file.originalname.slice(0, file.originalname.lastIndexOf('.')) + '_' + Date.now() + "." + mime.getExtension(file.mimetype));
    }
});
const upload = multer({
    storage: storage
});

const shell = require('./shell')

router.post('/shell/openCMD', shell.openCMD)
router.post('/shell/exec', shell.exec)

const app = require('./app')

router.post('/app/list', app.list)
router.post('/app/add', app.add)
router.post('/app/update', app.update)

const http = require('./http')
router.post('/http/post', http.post)
router.post('/http/get', http.get)


const file = require('./file')
router.post("/file/upload", upload.single("file"), file.upload);


module.exports = router;