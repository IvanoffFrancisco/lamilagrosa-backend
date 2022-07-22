const {Router}=require('express');
const router=Router();

const {login,registro,modificarUsuario,eliminarUsuario,getUser,getEmail}=require('../controllers/UsarioController');

router.post('/login',login);

router.post('/registro',registro);

router.post("/getUser",getUser);

router.post("/getEmail",getEmail);

router.put('/modificarUsuario',modificarUsuario);

router.delete('/eliminarUsuario',eliminarUsuario);

module.exports=router;