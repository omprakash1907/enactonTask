const express = require("express");
const dbConnection = require("./src/config/db");
const productRouter = require("./src/router/productRoute");
const cors = require("cors");

const app = express()

// urlencoded
app.use(express.urlencoded({ extended: false }))
app.use(express.json());

// static
app.use(express.static('upload'));
app.use(cors());

// port
const PORT = 3000;

// database Connected
dbConnection()

// routes
app.use('/', productRouter)

// Start the server
app.listen(PORT, (err) => {
    if (err) {
        console.log('server Not Start')
    }
    console.log(`listing on port http://localhost:${PORT}`)
})