const connection = require(`./connection`);

const orm = {
    selectAll: (tableSearched, callBack) => {
        const queryString = `SELECT * FROM ${tableSearched};`
        connection.query(queryString, (err, data) => {
            if (err) { throw err };
            callBack(data);
        });
    },
    insertOne: (columns, value, callBack) => {
        //Columns comes in as an array which we then change to a string to query on
        const queryString = `INSERT INTO burgers (${columns.toString()}) VALUES (?, ?)`;
        connection.query(queryString, value, (err, result) => {
            if (err) { throw err };
            callBack(result);
        });
    },
    updateOne: () => {

    }
};

module.exports = orm;