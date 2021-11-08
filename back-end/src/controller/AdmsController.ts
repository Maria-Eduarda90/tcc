import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Adm from '../models/adm';



export default {

    async index(request: Request, response: Response) {
        const admRepository = getRepository(Adm);

        const adms = await admRepository.find();

        return response.json(adms);
    },

    async show(request: Request, response: Response) {

        const {id} = request.params;

        const admRepository = getRepository(Adm);

        const adm = await admRepository.findOneOrFail(id);

        return response.json(adm);
    },


    async create(request: Request, response: Response) {
        const {
            nome,
            nome_empresa,
            email,
            senha,
            images,
            chave_acesso
        } = request.body;

        const admRepository = getRepository(Adm);

        const adm = admRepository.create({
            nome,
            nome_empresa,
            email,
            senha,
            images,
            chave_acesso,
        });

        await admRepository.save(adm);

        return response.status(201).json({ adm })
    }
};