import { Router } from 'express';
import multer from 'multer';


import AdmsController from './controller/AdmsController'
import uploadConfig from './config/upload';

const router = Router();
const upload = multer(uploadConfig);

router.get('/adm', AdmsController.index);
router.get('/adm/:id', AdmsController.show);
router.post('/admAuth', AdmsController.autenticate);
router.post('/adm', upload.array('images'), AdmsController.create);
router.put('/adm/:uid', upload.array('images'), AdmsController.put);
router.delete('/adm/:id', upload.array('images'), AdmsController.delete);





export { router };