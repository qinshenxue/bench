const knex = require('../db/index');




exports.list = function (req, res) {

    knex.select().from('apps').then(function (doc) {
        res.json({
            success: 1,
            data: doc
        })
    }).catch(function (err) {
        res.json({
            success: 0,
            data: err
        })
    });

}

exports.add = function (req, res) {
    knex.insert(req.body).into('apps').then(id => {
        res.json({
            success: 1,
            data: id
        })
    }).catch(err => {
        res.json({
            success: 0,
            data: err
        })
    })
}

exports.update = function (req, res) {
    knex('apps').where({
        id: req.body.id
    }).update(req.body).then(id => {
        res.json({
            success: 1,
            data: id
        })
    }).catch(err => {
        res.json({
            success: 0,
            data: err
        })
    })
}