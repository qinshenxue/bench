const path = require('path')
module.exports = {
    sqlite: {
        client: 'sqlite3',
        connection: {
            filename: path.resolve(__dirname,"./data.sqlite")
        },
        pool: {
            min: 0,
            max: 7
        },
        useNullAsDefault: true
    }
}