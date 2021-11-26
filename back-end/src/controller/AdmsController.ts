import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Adm from '../models/adm';
import AdmView from '../views/adm_view';
import * as Yup from 'yup';


export default {

    async autenticate(request: Request, response: Response) {
        const admRepository = getRepository(Adm);

        const {
            email,
            senha,
        } = request.body;

        const administradorAlreadyExists = await admRepository.findOne({
            email,
            senha,
        })

        if (administradorAlreadyExists) {
            return response.status(200).json({ id: administradorAlreadyExists.id, token: 1234, message: "Logado com sucesso!" })
        } else {
            return response.status(200).json({ message: 'usuário ou senha inválida' })
        }

    },

    async index(request: Request, response: Response) {
        const admRepository = getRepository(Adm);

        const adms = await admRepository.find({ relations: ['images']});

        return response.json(AdmView.renderMany(adms));
    },

    async show(request: Request, response: Response) {

        const { id } = request.params;

        const admRepository = getRepository(Adm);

        const adm = await admRepository.findOneOrFail(id, { relations: ['images'] });
        return response.json(AdmView.render(adm));
    },

    async delete(request: Request, response: Response) {
        const admRepository = getRepository(Adm);
        const { id } = request.params;
        const administradorAlreadyExists = await admRepository.findOne(id);
        if (administradorAlreadyExists) {
            admRepository.delete(administradorAlreadyExists);
            return response.status(200).json({ message: 'Administrador apagado com sucesso!' });
        }
        response.status(200).json({ message: 'Error internal server' });
    },

    async put(request: Request, response: Response) {
        const admRepository = getRepository(Adm);
        const { uid } = request.params;
        const id = parseInt(uid);
        const administradorAlreadyExists = await admRepository.findOne(uid);
        if (administradorAlreadyExists) {
            const requestImages = request.files as Express.Multer.File[];
            const images = requestImages.map(image => {
                return {
                    id: id,
                    path: image.filename
                }
            });
            const {
                nome,
                nome_empresa,
                email,
                senha,
                chave_acesso
            } = administradorAlreadyExists;

            const data = {
                id,
                nome,
                nome_empresa,
                email,
                senha,
                chave_acesso,
                images
            };


            const adm = admRepository.create(data);
            await admRepository.save(adm);
            
            return response.status(200).json({ message: 'Sua imagem foi atualizada com sucesso' })
            
        }
        return response.status(200).json({ message: 'Error internal server'});
    },

    async create(request: Request, response: Response) {
        const {
            nome,
            nome_empresa,
            email,
            senha,
            chave_acesso,
            colaborador,
        } = request.body;
        console.log(request.body);
        const admRepository = getRepository(Adm);

        const requestImages = request.files as Express.Multer.File[];
        const images = requestImages.map(image => {
            return { path: image.filename }
        });

        const data = {
            nome,
            nome_empresa,
            email,
            senha,
            chave_acesso,
            images,
            colaborador,
        };

        const schema = Yup.object().shape({
            nome: Yup.string().required("Nome obrigatório"),
            nome_empresa: Yup.string().required("Nome da empresa obrigatório"),
            email: Yup.string().required("Email obrigatório").email(),
            senha: Yup.string().required("Senha obrigatório"),
            chave_acesso: Yup.string().required("Chave obrigatório"),
            colaborador: Yup.string(),
            images: Yup.array(Yup.object().shape({
                path: Yup.string(),
            }))
        });

        await schema.validate(data, {
            abortEarly: false,
        })

        const adm = admRepository.create(data);

        await admRepository.save(adm);

        return response.status(201).json({ adm })
    }
};