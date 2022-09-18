import { sequelize } from "./index"
import { DataTypes } from "sequelize";

const SIN = sequelize.define("SIN", {
    encrypted_sin: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    updatedAt: false,
})

export default SIN