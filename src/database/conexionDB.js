import { Sequelize } from 'sequelize';

export const conexion = new Sequelize('lamilagrosa', 'root', '', {
    host: 'localhost',
    dialect:"mariadb" /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
  });

  async function main(){
    try {
        await conexion.sync();
        await conexion.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
  }

  main();