import { DataTypes } from "sequelize";

export default (sequelize) => {
    const User = sequelize.define("User", {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4, // Generates a UUID automatically on creation
            primaryKey: true,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true, 
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
           
        },
    }, {
        timestamps: true 
    });

    return User;
};