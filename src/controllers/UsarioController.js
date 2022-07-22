const UsuarioMethods={}

const Usuario=require('../models/Usuario');
const jwt=require('jsonwebtoken');

// metodo para buscar un usuario
// se creo este metodo para verificar que no exista otro usuario igual
UsuarioMethods.getUser=async(req,res)=>{
    try {
        const buscarUser=await Usuario.find({user:req.body.user});
        if(buscarUser.length===1){
            res.json({user:"ocupado"});
        }else{
            res.json({user:"disponible"});
        }
        
    } catch (error) {
        console.log(error);
    }

}

// metodo para buscar un email
// se creo este metodo para verificar que no exista otro email igual
UsuarioMethods.getEmail=async(req,res)=>{
    try {
        const buscarEmail=await Usuario.find({email:req.body.email});
        if(buscarEmail.length===1){
            res.json({email:"ocupado"});
        }else{
            res.json({email:"disponible"});
        }
        
    } catch (error) {
        console.log(error);
    }

}

UsuarioMethods.login=async (req,res)=>{
    const {email,password}=req.body;
    const user=await Usuario.findOne({email:email});
    if(!user){
        res.status(400).json({"advertencia":"email y/o password incorrectos"});
    }else{
        if(user.password!==password){
            res.status(400).json({"advertencia":"email y/o password incorrectos"});
        }else{
            const token=await jwt.sign({id:user._id,isAdmin:user.isAdmin},process.env.MYSECRET);
            res.json({"token":token,user:user.user,id:user._id,direcciones:user.direcciones,email:user.email});
        }
    }
    
}
UsuarioMethods.registro= async (req,res)=>{
    try {

        const {user,email,password,direcciones,isAdmin=false}=req.body;

        const usuario=new Usuario({
            user:user,
            email:email,
            password:password,
            isAdmin:isAdmin
        })
        
        await usuario.save();

        await Usuario.updateOne({_id:usuario._id},
            {$push:{
                direcciones:
                        {calle:direcciones}
                    }
            }
            
        )

        res.json({data:"registro exitoso"});
        
    } catch (error) {
        console.log(error);
    }
    
}

UsuarioMethods.modificarUsuario=(req,res)=>{
    res.send("modificar");
}

UsuarioMethods.eliminarUsuario=(req,res)=>{
    res.send("eliminar");
}

module.exports=UsuarioMethods;