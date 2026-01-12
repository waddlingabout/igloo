import { DataTypes } from "sequelize";

export default (sequelize) => {
    const External = sequelize.define("External", {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        externalId: {
            type: DataTypes.STRING, 
            allowNull: false,
            unique: true, 
        },
       
    });

    return External;
};