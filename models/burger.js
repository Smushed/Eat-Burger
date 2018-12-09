const orm = require(`../config/orm`);

const burger = {
    //Displays all the data when the route / is called
    show: (callBack) => {
        orm.selectAll(`burgers`, data => {
            callBack(data)
        });
    },
    create: (columns, value, callBack) => {
        orm.insertOne(columns, value, (res) => {
            callBack(res);
        });
    }
};

module.exports = burger;