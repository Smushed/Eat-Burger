const connection = require(`./connection`);

const orm = {
    selectAll: () => (tableSearched, callBack) => {
        const queryString = `SELECT * FROM ${tableSearched};`
        connection.query(queryString, (err, data) => {
            if (err) { throw err };
            callBack(data);
        });
    },
    insertOne: () => {

    },
    updateOne: () => {

    }
};

module.exports = orm;