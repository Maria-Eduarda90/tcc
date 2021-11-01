import { Router } from 'express';
import { CollaboratorController } from './controller/CollaboratorController';

const router = Router();

const collaboratorController = new CollaboratorController;

router.post("/collaborator", collaboratorController.create);

export { router };