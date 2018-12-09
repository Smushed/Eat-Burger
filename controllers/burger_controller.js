const express = require(`express`);
const burger = require(`../models/burger`);
const router = express.Router();

router.get(`/`, (req, res) => {
    //Basic functions to show all the burgers currently in the database
    burger.show((data) => {
        //Parses the data to return the the app
        const burgerObject = {
            burgers: data
        };
        console.log(burgerObject);
        //Displaying all the data in the database to the webpage
        res.render(`index`, burgerObject);
    });
});

router.post(`/api/burgers`, (req, res) => {
    burger.create([
        //Passes in the columns to be filled in
        "burger_name", "devoured"
    ], [
            //Passes in the data name of the burger and hard coded that it's not devoured
            req.body.burger_name, 0
        ], result => {
            //Gets the new ID when the result is returned
            res.json({ id: result.insertId })
        })
});

module.exports = router;