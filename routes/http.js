const request = require('request')

exports.post = function (req, res) {
    request.post(req.body, (e, r, b) => {
        res.json({
            data: r
        })
    })
}


exports.get = function (req, res) {
    console.log(req.body)
    request.get(req.body, (e, r, b) => {
        res.json({
            data: r
        })
    })
}