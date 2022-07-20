const {Schema,model}=require('mongoose');


const ComidaSchema=new Schema({
    imagen:{
        type:String
    },
    nombre:{
        type:String,
        require:true
    },
    precio:{
        type:Number,
        require:true
    },
    categoria:[{
        tipo:{
            type:String
        }
    }],
    ingredientes:[{
        tipo:{
            type:String
        }
    }]
})

module.exports=model("comida",ComidaSchema);