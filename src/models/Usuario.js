const {Schema,model}=require('mongoose');
const SchemaUsuario=new Schema({
        user:{
            type:String
        },
        email:{
            type:String,
            required:true
        },
        password:String,
        direcciones:[{
            calle:{type:String,required:true,unique:false}
        }]
})

module.exports=model("usuario",SchemaUsuario);