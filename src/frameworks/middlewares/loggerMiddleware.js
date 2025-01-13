import morgan from 'morgan';
import logHandler from '../utils/logHandler.js';

const stream = {
    //Using http severity
    write: (message) => logHandler.http(message),
};

const skip = () => {
    const env = process.env.NODE_ENV || 'development';
    return env !== 'development';
};

const loggerMiddleware = morgan(
    ':remote-addr :method :url :status :res[content-length] - :response-time ms',
    { stream, skip }
);

export default loggerMiddleware;