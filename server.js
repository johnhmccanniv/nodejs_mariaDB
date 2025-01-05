const http = require('http');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');

// API here
const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');

app.use(bodyParser.urlencoded({extended:false}));

dotenv.config();

//Defines API routes to handle specific API endpoints
//app.use(cors());
//app.use(express.json());
//app.use("/api/auth", authRoute);
//app.use("/api/users", userRoute);

/*
//Starts the server
app.listen(process.env.MARIADB_PORT || 5000, () => {
    console.log("Backend server is running!");
});
*/

http.createServer(app).listen(process.env.MARIADB_PORT, ()=> {
    console.log('Backend server is running.');
});