import {addColors, format as _format,
        transports as _transports, createLogger } from 'winston';

//Defining severity levels for log files
const levels = {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    debug: 4,
};

const level = () => {
    const env = process.env.NODE_ENV || 'development';
    const isDevelopment = env === 'development';
    return isDevelopment ? 'debug' : 'warn'; //Set log level to debug here
}

//Different colors for each level
const colors = {
    error: 'red',
    warn: 'yellow',
    info: 'green',
    http: 'blue',
    debug: 'white',    
};

// Using Winston to link the colors to the severity levels
addColors(colors);

const format = _format.combine(
    _format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
    // Logs must be colored using Winston
    _format.colorize({ all: true }),
    _format.printf(
        (info) => `${info.timestamp} ${info.level}: ${info.message}`,
    ),
);

// Define which transports the logger must use, three different transports
const transports = [
    new _transports.Console(),
    new _transports.File({
        filename: 'logs/error.log',
        level: 'error',
    }),
    new _transports.File({ filename: 'logs/all.log' }),
];

// Create the logger instance to be exported
export default createLogger ({
    level: level(),
    levels,
    format,
    transports,
});