import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import  Administrador  from '../models/Administrador';
import { Collaborator } from '../models/Collaborator';

class AdministradorController{
    async index(request: Request, response:Response){
        const administradorRepository = getRepository(Collaborator);

        const collaborator = await administradorRepository.find()

        return response.json(collaborator);
    }

    async show(request: Request, response: Response){
        const { id } = request.params;

        const administradorRepository = getRepository(Collaborator);

        const collaborator = await administradorRepository.findOneOrFail(id);

        return response.json(collaborator);
    }

    async create(request: Request, response: Response) {
        const {
            name,
            nome_empresa,
            email,
            password,
            token,
            // collaborator_id,
            // tarefas_id,
        } = request.body;

        const administradorRepository = getRepository(Administrador);

        const requestImages = request.files as Express.Multer.File[];

        const images = requestImages.map(image => {
            return {path: image.filename}
        })

        const administrador = administradorRepository.create({
            name,
            nome_empresa,
            email,
            password,
            token,
            images
            // collaborator_id,
            // tarefas_id,
        })

        await administradorRepository.save(administrador);

        return response.status(201).json(administrador)
    }
}

export { AdministradorController };