const sequelize_connection = require("../../connections/mysql_sequelize");
const {DataTypes} = require("sequelize");

const Brand = sequelize_connection.define("brands", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    logo: {
        type: DataTypes.STRING,
        defaultValue: "https://default-image.com"
    },
    name: {
        type: DataTypes.STRING
    },
    quantity: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    link: {
        type: DataTypes.STRING
    }
    ,
    status: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
},{
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

module.exports = Brand;