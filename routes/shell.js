const {
    exec
} = require("child_process");

const iconv = require('iconv-lite');


exports.openCMD = function (req, res) {
    exec(`start cmd.exe /C "${req.body.cmd}"`, {
        cwd: req.body.cwd
    }, function (err, stdout, stderr) {
        if (err) {
            res.send({
                success: 0
            });
        } else {
            res.send({
                success: 1
            });
        }
    });
};

exports.exec = function (req, res) {
    exec(`${req.body.cmd}`, {
        encoding: 'buffer',
        cwd: req.body.cwd
    }, function (err, stdout, stderr) {
        if (err) {
            console.log(iconv.decode(stderr, 'cp936'))
            res.send({
                success: 0,
                data: iconv.decode(stderr, 'cp936')
            });
        } else {
            res.send({
                success: 1,
                data: iconv.decode(stdout, 'cp936')
            });
        }
    });
}