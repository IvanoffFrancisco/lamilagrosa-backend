import {DataTypes} from 'sequelize';
import {conexion} from '../database/conexionDB.js';


export const Usuario=conexion.define("usuario",{
    id_usuario:{
        type:DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    usuario:{
        type: DataTypes.STRING
    },
    contraseña:{
        type: DataTypes.STRING,
    },
    email:{
        type: DataTypes.STRING,
    },
    direccion:{
        type: DataTypes.STRING,
    }
})