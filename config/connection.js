require(`dotenv`).config()
const mysql = require("mysql");
let connection;

if (process.env.JAWSDB_URL) {
    connection = musql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: process.env.HOST,
        port: process.env.PORT || 3306,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: "burgers_db"
    });
};

connection.connect(function (err) {
    if (err) {
        console.error(`error connecting: ${err.stack}`);
        return;
    }
    console.log(`Connected`);
});

module.exports = connection;
