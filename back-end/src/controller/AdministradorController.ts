import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import administradorView from '../views/administradorView';
import  Administrador  from '../models/Administrador';
import { Collaborator } from '../models/Collaborator';
import * as Yup from 'yup';

class AdministradorController{
    async index(request: Request, response:Response){
        const administradorRepository = getRepository(Administrador);

        const administrador = await administradorRepository.find({
            relations: ['images']
        })

        return response.json(administradorView.renderMany(administrador));
    }

    async show(request: Request, response: Response){
        const { id } = request.params;

        const administradorRepository = getRepository(Administrador);

        const administrador = await administradorRepository.findOneOrFail(id, {
            relations: ['images']
        });

        return response.json(administradorView.render(administrador));
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

        // const administrador = administradorRepository.create({
        //     name,
        //     nome_empresa,
        //     email,
        //     password,
        //     token,
        //     images
        //     // collaborator_id,
        //     // tarefas_id,
        // })

        const data = {
            name,
            nome_empresa,
            email,
            password,
            token,
            images
        }

        const schema = Yup.object().shape({
            name: Yup.string().required(),
            nome_empresa: Yup.string().required(),
            email: Yup.string().required(),
            password: Yup.string().required(),
            token: Yup.string().required(),
            images: Yup.array(
                Yup.object().shape({
                    path: Yup.string().required()
                })
            )
        });

        await schema.validate(data, {
            abortEarly: false,
        })

        const administrador = administradorRepository.create(data)

        await administradorRepository.save(administrador);

        return response.status(201).json(administrador)
    }
}

export { AdministradorController };