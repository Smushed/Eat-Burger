const orm = require(`./config/orm`);
const PORT = process.env.PORT || 3300;
const express = require(`express`);
const app = express();

app.use(express.static(`public`));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const exphbs = require(`express-handlebars`);

app.use(`handlebars`, exphbs({ defaultLayout: `main` }));
app.set(`view engine`, `handlebars`);

//Import the routes from controller
const routes = require(`./controllers/burger_controller`);

//Give the server access to the routes
app.use(routes);

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`)
});