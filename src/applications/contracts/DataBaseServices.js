import logHandler from "../../frameworks/utils/logHandler";
import Sequelize from 'sequelize';

// Connect to the database and creatae a Sequelize instant

export default class DatabaseServices {
    constructor() {
        this.sequelize = null;
    }

    async initDatabase() {
        
    }
}