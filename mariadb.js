const mariadb = require('mariadb');

const pool = mariadb.createPool({
    host: process.env.MARIADB_IP,
    port: process.env.MARIADB_PORT,
    user: process.env.MARIADB_USER,
    password: process.env.MARIADB_PASSWORD,
    connectionLimit: 5
});

var getConnection = function(callback) {
    pool.getConnection(function(err, connection) {
        callback(err, connection);
    });
};

module.exports = {
    pool,
    getConnection,
};