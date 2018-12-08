const orm = require(`../config/orm`);

const burger = {
    //Displays all the data when the route / is called
    show: (callBack) => {
        orm.selectAll(`burgers`, data => {
            callBack(data)
        });
    },
    create: (callBack) => {
    }
};

module.exports = burger;