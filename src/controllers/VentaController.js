const VentaMethods={};
const Venta=require('../models/Venta');
const DetalleVenta=require('../models/DetalleVenta');


VentaMethods.getVentas=async (req,res)=>{
    try {
        const DataVentas=await Venta.find({id_usuario:req.params.id_usuario});
        res.json(DataVentas);
    } catch (error) {
        console.log(error);
    }
}

VentaMethods.getDetalleVenta=async (req,res)=>{
    try {
        const DataDetalleVentas=await DetalleVenta.find({id_venta:req.params.id_venta}).populate('id_menu').populate('id_guarnicion');
        res.json(DataDetalleVentas);
    } catch (error) {
        console.log(error);
    }
}

VentaMethods.nuevaVenta=async (req,res)=>{
    const {id_usuario,montoTotal,direccion,formaDePago,nombre,telefono,retira,fecha,carrito}=req.body;
    try {
        const dataVentas=new Venta({
            id_usuario,
            nombre,
            telefono,
            fecha,
            montoTotal,
            formaDePago,
            retira,
            direccion

        });
        await dataVentas.save();

        carrito.map(async menu=>{
            const newDetalle=new DetalleVenta({
                id_venta:dataVentas._id,
                id_menu:menu.idMenu,
                id_guarnicion:menu.idGuarnicion,
                cantidad:menu.cantidad,
                precioUnitario:menu.precio,
                tipoCarne:menu.tipoCarne
            });
            await newDetalle.save();
        })


        res.json({data:"se guardo la venta"})
    } catch (error) {
        console.log(error);
    }
}

module.exports=VentaMethods;
