const jwt = require('jsonwebtoken')

async function auth(req, res, next){
    let Token = req.header('access-token')
    if(!Token){
        return res.status(401).send('Acceso Denegado. Necesitamos un token valido')
    }else{
        try{
            const verificar = await jwt.verify(Token, process.env.MYSECRET)
            req.user = verificar
            next()
        }catch(e){
            res.status(400).send('Acceso Denegado. Token no valido')
        }
    } 

    
}

module.exports = auth