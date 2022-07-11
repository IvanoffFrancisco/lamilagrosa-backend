import {DataTypes} from 'sequelize';
import {conexion} from '../database/conexionDB.js';
import {Comida} from './Comida.js'
export const Categoria=conexion.define('categoria',{
    id_categoria:{
        type:DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
        
    },
    categoria:{
        type:DataTypes.STRING
    }
});

Categoria.hasMany(Comida,{
    foreignKey:'id_categoria',
    sourceKey:'id_categoria',
    onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
});

Comida.belongsTo(Categoria,{
    foreignKey:'id_categoria',
    targetId:'id_categoria'
})