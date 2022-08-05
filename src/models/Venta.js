const {Schema,model}=require('mongoose');


const VentaSchema=new Schema({
    id_usuario:{ type: Schema.Types.ObjectId, ref: 'usuario',required:false },
    fecha: {
         type: String, 
    },
    nombre:{
        type:String
    },
    telefono:{
        type:String
    },
    montoTotal:{
        type:String,
        required:true
    },
    formaDePago:{
        type:String
    },
    retira:{
        type:String
    },
    direccion:{
        type:String,
        required:false
    }
})

module.exports=model("venta",VentaSchema);