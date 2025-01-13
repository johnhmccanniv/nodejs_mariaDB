import express from 'express';
import bodyParser from 'body-parser';
import http from 'http';
import loggerMiddleware from './frameworks/middlewares/loggerMiddleware.js';
import logHandler from './frameworks/utils/logHandler.js';

const port = process.env.MARIADB_PORT || 3000;
const app = express();

// Log all requests to the server
app.use(loggerMiddleware);

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Set the port for the server and start the server
// The server will listen on port 3000 or MARIADB_PORT
app.set('port', port);
const server = http.createServer(app);
server.listen(port, () => {
    logHandler.info(`Server is running on port ${port}`);
});