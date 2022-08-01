const {Router}=require('express');
const router=Router();

const auth=require('../middleware/auth');
const Admin=require('../middleware/Admin');
const {getGuarnicion,nuevaGuarnicion,obtenerGuarnicionId}=require('../controllers/GuarnicionController');

//ruta para obtener todas las guarniciones
router.get("/guarniciones",getGuarnicion);

//ruta para obtener la guarnicion segun el id que le pases
router.get('/guarniciones/:id',obtenerGuarnicionId);

//ruta agregar nueva guarnicion
router.post("/nuevaGuarnicion",[auth,Admin],nuevaGuarnicion);


module.exports=router;