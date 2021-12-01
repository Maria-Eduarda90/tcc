import { Router } from 'express';
import multer from 'multer';


import AdmsController from './controller/AdmsController'
import ColaboradoresController from './controller/ColaboradorController';
import AuthController from './controller/AuthController';
import uploadConfig from './config/upload';

const router = Router();
const upload = multer(uploadConfig);

router.get('/adm', AdmsController.index);
router.get('/adm/:id', AdmsController.show);
router.post('/adm', upload.array('images'), AdmsController.create);
router.put('/adm/:uid', upload.array('images'), AdmsController.put);
router.delete('/adm/:id', upload.array('images'), AdmsController.delete);

router.post('/auth', AuthController.autenticate);


router.get('/colaborador', ColaboradoresController.index);
router.get('/colaborador/:id', ColaboradoresController.show);
router.post('/colaborador', upload.array('images'), ColaboradoresController.create);
router.put('/colaborador/:uid', upload.array('images'), ColaboradoresController.put);//criar metodo de atualização
router.delete('/colaborador/:id', upload.array('images'), ColaboradoresController.delete);

//TODO: não esquece de passar id nos parametros
//TODO: não esquece de passa id para as imagens em updates






export { router };