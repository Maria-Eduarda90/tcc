import { Router } from 'express';
import { CollaboratorController } from './controller/CollaboratorController';
import { AdministradorController } from './controller/AdministradorController'

const router = Router();

const administradorController = new AdministradorController;
const collaboratorController = new CollaboratorController;

router.post("/collaborator", collaboratorController.create);
router.post("/administrador", administradorController.create);

export { router };