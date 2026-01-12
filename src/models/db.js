import { Sequelize } from "sequelize";
import userModel from "./User.js";
import externalModel from "./External.js";

const sequelize = new Sequelize(
    process.env.POSTGRESDB_DATABASE,
    process.env.POSTGRESDB_USER,
    process.env.POSTGRESDB_ROOT_PASSWORD, {
        host: process.env.POSTGRESDB_HOST,
        dialect: process.env.POSTGRESDB_DIALECT,
        operatorsAliases: false,
        pool: {
            max: 10,     
            min: 0,     
            acquire: 30000, 
            idle: 10000 
        }
    }
);

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = userModel(sequelize);
db.External = externalModel(sequelize);


db.User.hasMany(db.External, { 
    foreignKey: 'userId', 
    as: 'externals'     
});

db.External.belongsTo(db.User, {
    foreignKey: 'userId'
});


export default db;