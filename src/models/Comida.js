import {DataTypes} from 'sequelize';
import {conexion} from '../database/conexionDB.js';

export const Comida=conexion.define("comida",{
    id_comida:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    nombre:{
        type:DataTypes.STRING
    },
    ingredientes:{
        type:DataTypes.STRING
    },
    precio:{
        type:DataTypes.DOUBLE
    }
})