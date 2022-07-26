const {Schema,model}=require('mongoose');


const GuarnicionSchema=new Schema({
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
    ingredientes:[{
        tipo:{
            type:String
        }
    }]
})

module.exports=model("Guarnicione",GuarnicionSchema);