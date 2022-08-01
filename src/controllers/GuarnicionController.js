const GuarnicionMethods={};

const Guarnicion=require('../models/Guarnicion');

// get Guarniciones
GuarnicionMethods.getGuarnicion=async(req,res)=>{
    try {
        const data=await Guarnicion.find();
        res.json(data);
    } catch (error) {
        console.log(error);
    }
}

GuarnicionMethods.obtenerGuarnicionId=async (req,res)=>{
    try {
        const data=await Guarnicion.findOne({_id:req.params.id});
        res.json(data)
    } catch (error) {
        console.log(error);
    }
}

GuarnicionMethods.nuevaGuarnicion=async(req,res)=>{
    try {
        const {imagen,nombre,precio,ingredientes}= req.body;
    
    let nuevaGuarnicion=new Guarnicion({
        imagen,
        nombre,
        precio
    })

    await nuevaGuarnicion.save();

    //agrego los ingredientes
    ingredientes.map(async (ingre)=>{
        await Guarnicion.updateOne({_id:nuevaGuarnicion._id},
            {$push:{
                ingredientes:
                        {tipo:ingre}
                    }
            })
    })

    res.json({nuevo:"nueva Guarnicion"});
        
    } catch (error) {
        console.log(error)
    }
}

module.exports=GuarnicionMethods;