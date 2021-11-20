import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Tarefas } from '../models/Tarefas';

class TarefasController {
    async create(request: Request, response: Response) {
        const {
            titulo,
            descricao,
            propriedade_tarefa,
            comentario
        } = request.body;

        const tarefaRepository = getRepository(Tarefas);

        const tarefas = tarefaRepository.create({
            titulo,
            descricao,
            propriedade_tarefa,
            comentario
        })

        await tarefaRepository.save(tarefas);

        return response.status(201).json(tarefas)
    }
}

export { TarefasController };