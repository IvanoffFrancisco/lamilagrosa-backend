const {Router}=require('express');
const router=Router();

const {getVentas,nuevaVenta,getDetalleVenta} =require('../controllers/VentaController');

//obtener todas las ventas
router.get("/ventas/:id_usuario",getVentas);

//Nueva venta
router.post("/ventas",nuevaVenta);

router.get("/Detallesventas/:id_venta",getDetalleVenta);


module.exports=router;