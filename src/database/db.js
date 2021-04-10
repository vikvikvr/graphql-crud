const Database = require('./Database');
const data = require('./data.json');

const db = new Database(data);

module.exports = db;
