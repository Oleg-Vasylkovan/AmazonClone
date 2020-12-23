const functions = require('firebase-functions');
const express = require('express');
const cors = require("cors");
const { request } = require('express');
const { response } = require('express');
const stripe = require("stripe")('sk_test_51HpHNwIOJ0EHJ0ivNHgqOpkAr8n8mxizbgq1JQgFB70mzQNfGYZRaVwELxJgoUvstc1GHgPccC7fBXHcZf5H4NjP00r1BUgTGT')

const app = express();
app.use(cors({origin:true}));
app.use(express.json());
app.get('/',(request,response) => response.status(200).send('hello wolrd'));

app.post('/payments/create',async (request,response) => {
    const total = request.query.total;

    console.log("payment Request Recieved BOOM!!! for this amount >>>>", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount:total,
        currency:"usd",
    });

    response.status(201).send({
        clientSecret:paymentIntent.client_secret,
    });
});

exports.api = functions.https.onRequest(app);



// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
//http://localhost:5001/clone-1f6fa/us-central1/api
