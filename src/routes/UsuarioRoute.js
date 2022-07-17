const {Router}=require('express');
const router=Router();

const {login,registro,modificarUsuario,eliminarUsuario}=require('../controllers/UsarioController');

router.post('/login',login)

router.post('/registro',registro)

router.put('/modificarUsuario',modificarUsuario)

router.delete('/eliminarUsuario',eliminarUsuario)

module.exports=router;