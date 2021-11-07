import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Collaborator } from '../models/Collaborator';

class CollaboratorController {
    async create(request: Request, response: Response) {
        const {
            name,
            sobrenome,
            email,
            password,
            // administrador_id,
            // tarefas_id
        } = request.body;

        const collaboratorRepository = getRepository(Collaborator);

        const collaborator = collaboratorRepository.create({
            name,
            sobrenome,
            email,
            password,
            // administrador_id,
            // tarefas_id
        })

        await collaboratorRepository.save(collaborator);

        return response.status(201).json(collaborator)
    }
}

export { CollaboratorController };