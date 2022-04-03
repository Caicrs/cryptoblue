import Sequelize from 'sequelize';
import {connection} from '../database/connection.js'


export const listnft = connection.define(
    "nft_list",
    {
        id:{
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true 
        },
        nome:{
            type: Sequelize.TEXT,
            allowNull: false
        },
        autor:{
            type: Sequelize.TEXT,
            allowNull: false
        },
        description:{
            type: Sequelize.TEXT,
            allowNull: false
        },
        url_img:{
            type: Sequelize.TEXT,
            allowNull: false
        },
        price:{
            type: Sequelize.TEXT,
            allowNull: false
        }
    },
    {
        freezeTableName: true,
        createdAt: false,
        updatedAt: false,
        timestamps:false
    }
)