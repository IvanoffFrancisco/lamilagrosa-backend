const {Router}=require('express');
const router=Router();

const auth=require('../middleware/auth');
const Admin=require('../middleware/Admin');
const {postComida,getComida,buscarComidaId}=require('../controllers/ComidaController');

//ruta para obtener todas las comidas
router.get("/comidas",getComida);

//ruta para obtener una comida por id
router.get("/comidas/:id",buscarComidaId);

//ruta agregar nueva comida
router.post("/nuevaComida",[auth,Admin],postComida);


module.exports=router;