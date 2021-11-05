import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Administrador } from '../models/Administrador'

class AdministradorController {
    async create(request: Request, response: Response) {
        const {
            name,
            nome_empresa,
            email,
            password,
            token,
            collaborator_id,
            tarefas_id,
        } = request.body;

        const administradorRepository = getRepository(Administrador);

        const administrador = administradorRepository.create({
            name,
            nome_empresa,
            email,
            password,
            token,
            collaborator_id,
            tarefas_id,
        })

        await administradorRepository.save(administrador);

        return response.status(201).json(administrador)
    }
}

export { AdministradorController };