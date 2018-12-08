const express = require(`express`);
const burger = require(`../models/burger`);
const router = express.Router();

router.get(`/`, (req, res) => {
    //Basic functions to show all the burgers currently in the database
    burger.show((data) => {
        const burgerObject = {
            burgers: data
        };
        console.log(burgerObject);
        //Displaying all the data in the database to the webpage
        res.render(`index`, burgerObject);
    });
});

router.post(`/api/burgers`, (req, res) => {
    burger.create()
});

module.exports = router;