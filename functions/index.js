const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("pk_test_51IPbKHLGi8vxXfkLOAPosAJ7j4HUk6dmKfIqlgMAr3AvetVs30fUOpnpd8tO2ET9FVtjlMYWPmmvAViQ8HYrnftP00GeZgjBqQ");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//


// ~ API
// ~ API config
const app = express();

// ~ Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// ~ API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

// ~ listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/clone-2fd2a/us-central1/api
