const {Schema,model}=require('mongoose');

const DetalleVentaSchema=new Schema({
    id_venta:{ type: Schema.Types.ObjectId, ref: 'venta' },
    id_menu:{ type: Schema.Types.ObjectId, ref: 'comida' },
    id_guarnicion:{ type: Schema.Types.ObjectId, ref: 'Guarnicione', required:false},
    cantidad:{
        type:String,
        required:true
    },
    precioUnitario:{
        type:Number,
        required:true
    },
    tipoCarne:{
        type:String,
        required:false
    }
})

module.exports=model("detalleVenta",DetalleVentaSchema);