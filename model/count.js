const { DataTypes }=require('sequelize');
const sequelize=require('../connection/database.js');

const Count=sequelize.define('count',{
  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    unique:true,
    primaryKey:true
  },
  name:{
    type:DataTypes.STRING,
    allowNull:false,
  },
    description:{
      type:DataTypes.STRING,
      allowNull:false,
    },
  price:{
    type:DataTypes.STRING,
    allowNull:false,
  },
  quantity:{
    type:DataTypes.INTEGER,
    allowNull:false,
  },

});
module.exports=Count;