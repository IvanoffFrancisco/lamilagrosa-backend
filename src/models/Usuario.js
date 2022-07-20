const {Schema,model}=require('mongoose');
const SchemaUsuario=new Schema({
        user:{
            type:String,
            required:true,
            unique: true
        },
        email:{
            type:String,
            required:true,
            unique: true
        },
        password:String,
        direcciones:[{
            calle:{type:String,required:true,unique:false}
        }],
        isAdmin:Boolean
})

module.exports=model("usuario",SchemaUsuario);