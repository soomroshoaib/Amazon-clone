const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
// const stripe = require("stripe")("pk_test_51IPbKHLGi8vxXfkLOAPosAJ7j4HUk6dmKfIqlgMAr3AvetVs30fUOpnpd8tO2ET9FVtjlMYWPmmvAViQ8HYrnftP00GeZgjBqQ");
// const stripe = require("stripe")("pk_test_51IPbKHLGi8vxXfkLOAPosAJ7j4HUk6dmKfIqlgMAr3AvetVs30fUOpnpd8tO2ET9FVtjlMYWPmmvAViQ8HYrnftP00GeZgjBqQ");
// const stripe = require("stripe")("pk_live_51IPbKHLGi8vxXfkLk6F1nVnAVArBxG9ZJSahGsbZST2sdgH9ejTOiYN2zVYJgV0oEkU86PbKaXIklTHyY3p58OkY00dIM4K2ft");
const stripe = require("stripe")("sk_test_51IPbKHLGi8vxXfkLMxTuTODqqG7IuXpx7DmV5PEZHKTBDK10NtX6D23fI2OTGAbZA2cQ64VtWIej2SYSPyWz6aGi00kxaUgxbM");
// const stripe = require("stripe")("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");

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
app.post("/payments/create", async (request, response)=> {
    const total = request.query.total;
    
    console.log('Payment Request Recieved BOOM!!! for this amount >>>', total);
    
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,  // subunits of the currency
        currency: "usd"
    });

    // Ok - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
} )

// ~ listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/clone-2fd2a/us-central1/api
