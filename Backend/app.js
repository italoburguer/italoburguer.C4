const express = require ('express');
const bodyParser = require("body-parser");
const cors = require('cors')

const app = express();
const { API_VERSION } = require('./config');

const authRoutes = require("./routers/auth");
const authRoutesUser = require("./routers/auth.user");
const adminRoutes = require('./routers/admin');
const platoRoutes = require('./routers/plato');
const userRoutes = require("./routers/user");
const carritoRoutes = require("./routers/carrito")

app.all("*", (req, res, next) => {
   res.setHeader("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "x-www-form-urlencoded, Origin, X-Requested-With, Content-Type, Accept, Authorization, *"
    );
    res.setHeader(
      "Acces-Control-Allow-Methods",
      "GET, POST, PUT, HEAD, PATCH, DELETE, OPTIONS"
    );
    next();
});

app.use(cors());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(`/api/${API_VERSION}`, userRoutes);
app.use(`/api/${API_VERSION}`, platoRoutes);
app.use(`/api/${API_VERSION}`, authRoutes);
app.use(`/api/${API_VERSION}`, authRoutesUser);
app.use(`/api/${API_VERSION}`, adminRoutes);
app.use(`/api/${API_VERSION}`, carritoRoutes);

module.exports = app;