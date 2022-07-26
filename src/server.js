const express=require('express');
const app=express();
const cors = require('cors');
const UsuarioRoute=require('./routes/UsuarioRoute');
const ComidaRoute=require('./routes/ComidaRoute');
const GuarnicionRoute=require('./routes/GuarnicionRoute');


//configuraciones
app.set("PORT",process.env.PORT || 4000);

// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept,access-token ,Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


//middleware
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//rutas
app.get("/getUsuario",(req,res)=>{
    res.send('hola');
})
app.use('/api',UsuarioRoute);
app.use('/api',ComidaRoute);
app.use('/api',GuarnicionRoute);

module.exports=app;