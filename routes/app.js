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
    knex.insert({
        app_name: 'CI发布',
        app_icon: 'ydjh',

    }).into('apps').then(id => {
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
        id: 1
    }).update({
        app_name: 'mce build'

    }).then(id => {
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