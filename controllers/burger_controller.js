const express = require(`express`);
const burger = require(`../models/burger`);
const router = express.Router();

router.get(`/`, (req, res) => {
    burger.show((data) => {
        const burgerObject = {
            burgers: data
        };
        console.log(burgerObject);
        res.render(`index`, burgerObject);
    });
});

router.post(`/api/burgers`, (req, res) => {
    burger.create()
});