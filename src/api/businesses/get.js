const db = require('../../db');

const get = {

    status: async function(req, res) {
        db.query(`SELECT * FROM ${db.table}`);
    },

};

module.exports = get;
