import { Router } from 'express';
import multer from 'multer'

import uploadConfig from './config/upload';
import { CollaboratorController } from './controller/CollaboratorController';
import { AdministradorController } from './controller/AdministradorController';
import { TarefasController } from './controller/TarefasController';

const router = Router();
const upload = multer(uploadConfig);

const administradorController = new AdministradorController;
const collaboratorController = new CollaboratorController;
const tarefasController = new TarefasController;

router.post("/collaborator", upload.single('images'), collaboratorController.create);
router.get("/collaborator/:id", administradorController.show);

router.get("/administrador", administradorController.index);
router.post("/administrador", upload.single('images'), administradorController.create);

router.post("/tarefas", tarefasController.create);

export { router };