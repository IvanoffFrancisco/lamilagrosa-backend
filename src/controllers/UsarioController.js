const UsuarioMethods={}

const Usuario=require('../models/Usuario');
const jwt=require('jsonwebtoken');


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