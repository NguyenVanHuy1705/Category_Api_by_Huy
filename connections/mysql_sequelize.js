const Sequelize = require("sequelize");

const sequelize_connection  = new Sequelize('sell_shop', 'root', '', {
        dialect: 'mysql',
        operatorsAliases: 0
    }
);

module.exports = sequelize_connection;