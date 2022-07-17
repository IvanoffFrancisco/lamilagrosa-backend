require('dotenv').config();
const app=require('./server');
require('./database/conexionDB');

function main(){
    app.listen(app.get("PORT"),()=>{
        console.log("server en ",app.get("PORT"));
        
    })
}
main();
