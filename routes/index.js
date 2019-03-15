var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {
        title: 'Express'
    });
});


const shell = require('./shell')

router.post('/shell/openCMD', shell.openCMD)
router.post('/shell/exec', shell.exec)

const app = require('./app')

router.post('/app/list', app.list)
router.post('/app/add', app.add)
router.post('/app/update', app.update)


module.exports = router;