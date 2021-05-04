
const mariadb = require("mariadb");

const pool = mariadb.createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "root",
    password: 'joulukuusi13'
});

const getAll= (request, response) => {
    (async () => {
        let con;
        con = await pool.getConnection();
        let rows = await con.query('SELECT * FROM example_db.location');
        response.json(rows);
    })()
}
module.exports = {
    getAll
}
