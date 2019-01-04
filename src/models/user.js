import {sequelize} from '../database';
import Sequelize from 'sequelize';

export const User = sequelize.define('user',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull:false
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:true,
        validate:{
            isEmail:true,
            isLowercase:true,
            notEmpty:true
        }
    },
    createdAt:Sequelize.DATE,
    password:{
        type:Sequelize.STRING,
        allowNull:false,
        validate:{
            notEmpty:true,
            min:7
        }
    }
})