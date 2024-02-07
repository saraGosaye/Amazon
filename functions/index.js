const functions = require ("firebase-functions");

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
    sk_test_51NZeVpHIZk2SKREpGC7AsQ4BdaUUq6Spd7vwcfVSrF72bfmsC2AGVYgh010NBxXilWBRrqRpRr1pWgBuGu2qWGfT00t09kgV5z
);


// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (request, response) => response.status(200).send("hello world"));



// Listen command
exports.api = functions.https.onRequest(app);
