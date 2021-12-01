import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as Yup from 'yup';
import Colaborador from '../models/colaborador';
import ColaboradorView from '../views/colaborador_view';


export default {

    async index(request: Request, response: Response) {
        const colaboradorRepository = getRepository(Colaborador);

        const colaboradores = await colaboradorRepository.find({ relations: ['images'] });

        return response.json(ColaboradorView.renderMany(colaboradores));
    },

    async show(request: Request, response: Response) {

        const { id } = request.params;

        const colaboradorRepository = getRepository(Colaborador);

        const adm = await colaboradorRepository.findOneOrFail(id, { relations: ['images'] });
        return response.json(ColaboradorView.render(adm));
    },

    async delete(request: Request, response: Response) {
        const colaboradorRepository = getRepository(Colaborador);
        const { id } = request.params;
        const colaboradorAlreadyExists = await colaboradorRepository.findOne(id);
        if (colaboradorAlreadyExists) {
            colaboradorRepository.delete(colaboradorAlreadyExists);
            return response.status(200).json({ message: 'Colaborador apagado com sucesso!' });
        }
        response.status(200).json({ message: 'Error internal server' });
    },

    async put(request: Request, response: Response) {
        const colaboradorRepository = getRepository(Colaborador);
        const { uid } = request.params;
        const id = parseInt(uid);
        const colaboradorAlreadyExists = await colaboradorRepository.findOne(uid);
        if (colaboradorAlreadyExists) {
            const requestImages = request.files as Express.Multer.File[];
            const images = requestImages.map(image => {
                return {
                    id: id,
                    path: image.filename
                }
            });
            const {
                nome,
                email,
                senha,
            } = colaboradorAlreadyExists;

            const data = {
                id,
                nome,
                email,
                senha,
                images
            };


            const colaborador = colaboradorRepository.create(data);
            await colaboradorRepository.save(colaborador);

            return response.status(200).json({ message: 'Sua imagem foi atualizada com sucesso' })

        }
        return response.status(200).json({ message: 'Error internal server'});
    },

    async create(request: Request, response: Response) {
        const isAdm = false;
        const {
            nome,
            email,
            senha,
            adm_id,
        } = request.body;
        console.log('request: ', request.body);

        const colaboradorRepository = getRepository(Colaborador);

        const requestImages = request.files as Express.Multer.File[];
        const images = requestImages.map(image => {
            return { path: image.filename }
        });

        const data = {
            nome,
            email,
            senha,
            adm_id,
            images,
            isAdm,
        };

        const schema = Yup.object().shape({
            nome: Yup.string().required("Nome obrigatório"),
            email: Yup.string().required("Email obrigatório").email(),
            senha: Yup.string().required("Senha obrigatório"),
            isAdm: Yup.boolean(),
            adm_id: Yup.number(),
            images: Yup.array(Yup.object().shape({
                path: Yup.string(),
            }))
        });

        await schema.validate(data, {
            abortEarly: false,
        })

        const colaborador = colaboradorRepository.create(data);

        await colaboradorRepository.save(colaborador);

        return response.status(201).json({ colaborador })
    }
};