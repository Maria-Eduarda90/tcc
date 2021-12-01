import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Adm from '../models/adm';
import Colaborador from '../models/colaborador';


export default {

    async autenticate(request: Request, response: Response) {
        const admRepository = getRepository(Adm);
        const colaboradorRepository = getRepository(Colaborador);

        const {
            email,
            senha,
        } = request.body;

        const administradorAlreadyExists = await admRepository.findOne({
            email,
            senha,
        })
        const colaboradorAlreadyExists = await colaboradorRepository.findOne({
            email,
            senha,
        })

        if (administradorAlreadyExists) {
            return response.status(200).json({ id: administradorAlreadyExists.id, token: 1234, message: "Logado com sucesso!" })
        } else if (colaboradorAlreadyExists) {
            return response.status(200).json({ id: colaboradorAlreadyExists.id, token: 12345, message: "Logado com sucesso!" })
        }
        else {
            return response.status(200).json({ message: 'usuário ou senha inválida' })

        }

    }
}