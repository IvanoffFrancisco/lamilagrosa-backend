import dotenv from 'dotenv';
import app from './server.js';
import './database/conexionDB.js';
import "./models/Usuario.js";
import "./models/Categoria.js";

function main(){
    app.listen(app.get("PORT"),()=>{
        console.log("server en ",app.get("PORT"));
    })
}
main();