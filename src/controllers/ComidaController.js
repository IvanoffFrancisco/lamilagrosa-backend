const ComidaMethods={};

const Comida=require('../models/Comida');

// getComidas
ComidaMethods.getComida=async(req,res)=>{
    const data=await Comida.find();
    res.json(data);
}


// buscar Comida por id
ComidaMethods.buscarComidaId=async(req,res)=>{
    
    try { 
        const data= await Comida.findById({_id:req.params.id});
        res.json(data)
        
    } catch (error) {
        console.log(error);
    }
}


//agregarNotas
ComidaMethods.postComida=async (req,res)=>{
    try {
        const {imagen,nombre,precio,ingredientes,categorias}= req.body;
    
    let newComida=new Comida({
        imagen,
        nombre,
        precio
    })

    await newComida.save();
    
    //agrego los ingredientes
    ingredientes.map(async (ingre)=>{
        await Comida.updateOne({_id:newComida._id},
            {$push:{
                ingredientes:
                        {tipo:ingre}
                    }
            })
    })

    //agrego las categorias
    categorias.map(async (cate)=>{
        await Comida.updateOne({_id:newComida._id},
            {$push:{
                categoria:
                        {tipo:cate}
                    }
            })
    })

    res.json({nuevo:"nueva comida"});
        
    } catch (error) {
        console.log(error)
    }
    }

// modificar Comida
ComidaMethods.modificarComida=async(req,res)=>{


    }


//eliminar comida
ComidaMethods.eliminarComida=async(req,res)=>{
    
}

module.exports=ComidaMethods;