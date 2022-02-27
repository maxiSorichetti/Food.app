const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      unique: true,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    summary: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    spoonacularScore: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    healthScore: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    //text o string para recibir array
    analyzedInstructions: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      // type: DataTypes.TEXT,   
      allowNull: true,
    }
  });
};

