const {Router}=require('express');
const router=Router();

const auth=require('../middleware/auth');
const Admin=require('../middleware/Admin');
const {getGuarnicion,nuevaGuarnicion}=require('../controllers/GuarnicionController');

//ruta para obtener todas las guarniciones
router.get("/guarniciones",getGuarnicion);


//ruta agregar nueva guarnicion
router.post("/nuevaGuarnicion",[auth,Admin],nuevaGuarnicion);


module.exports=router;