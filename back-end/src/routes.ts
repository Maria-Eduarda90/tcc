import { Router } from 'express';
import AdmsController from './controller/AdmsController'

const router = Router();

router.get('/adm', AdmsController.index)
router.get('/adm/:id', AdmsController.show)
router.post('/adm', AdmsController.create)


export { router };