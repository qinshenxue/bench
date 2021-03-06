const dbconfig = require('../db/config')
const knex = require('knex')(dbconfig.sqlite);


knex.schema.hasTable('apps').then(function (exists) {
    if (!exists) {
        return knex.schema.createTable('apps', function (table) {
            table.increments('id');
            table.string('app_name');
            table.string('app_icon');
            table.string('version');
            table.string('app_type');
            table.string('script');
            table.string('style');
            table.string('template');
            table.integer('status');
            table.timestamp('created_at').defaultTo(knex.fn.now())
        })
    }
});


module.exports = knex