const functions = require("firebase-functions");
const express = require('express');
const cors = require('cors');
const { request, response } = require("express");
const stripe = require('stripe')('sk_test_51IDXp3LfME8Q3ekwknNRJCsFMXFgd5N8sH2wMvW7nVQ1Yup8vJPTlPo6y8PH1xJ0WUd19B3gxdKWWub0UkW5ptAU00oj9sm19H')

// API

// -App config
const app = express();

// -Middlewares
app.use(cors({ origin: true}));
app.use(express.json());

// -API routes
app.get('/', (request, response) => response.status(200).send('hello world'));

//Payments.js 36 eilute
app.post('/payments/create', async (request, response) => {
    const total = request.query.total;
    console.log('Payment Request Recieved, for this amound>>>> ', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });
    //OK
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
        
    })
})

// -Listen command
exports.api = functions.https.onRequest(app);

//Example endpoint
//http://localhost:5001/clone-6ee52/us-central1/api

