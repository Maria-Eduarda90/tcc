import React, { useState } from 'react';
import { Container } from '../../styles/components/parts/modalCollaborator';

import * as AiIcons from 'react-icons/ai';
import * as BiIcons from 'react-icons/bs';
import { Link, useHistory, useParams } from 'react-router-dom';

import api from '../../services/api';
import { PropsParams } from '../../utils/estrutura_interfaces';
import CardColaborador from './SectionCardColaborador';

const ModalCollaborator: React.FC = () => {
    const [ModalCollaboratorActive, setModalCollaboratorActive] = useState(false);
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [images, setImages] = useState<File[]>([]);
    const params = useParams<PropsParams>();
    const adm_id = params.id;

    

    const handlerSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
        try {
            ev.preventDefault();
            const data = new FormData();
            data.append('nome', nome);
            data.append('email', email);
            data.append('senha', senha);
            data.append('adm_id', adm_id);
            images.forEach(image => {
                data.append('images', image)
            });
            const created = await api.post('/colaborador', data);

            if (created.status == 201) {
                alert('Colaborador cadastrodo com sucesso!');
            }
        } catch (error) {
            alert('Erro interno, tente novamente mais tarde! ' + error);
        }

    }

    function handleActiveModalCollaborator() {
        setModalCollaboratorActive(!ModalCollaboratorActive);
    }

    return (
        <Container>
            <div className="contributors">
                <button onClick={handleActiveModalCollaborator}><span><AiIcons.AiOutlineTeam /></span> Colaboradores</button>
            </div>

            <div className={`modal-wrapper ${ModalCollaboratorActive ? 'active' : 'inactive'}`}>
                <div className="modal">
                    <div className="ContainerFlexbox">
                        <p>Colaboradores ativos</p>
                        <Link to='#' className="menu-barsModal">
                            <AiIcons.AiOutlineClose onClick={handleActiveModalCollaborator} />
                        </Link>
                    </div>

                    <CardColaborador/>

                    <div className="containerModal">
                        <h2>Cadastrar novo colaboradores</h2>
                        <form onSubmit={handlerSubmit}>
                            <p>Nome completo</p>
                            <input type="text" name="text" id="text" onChange={e => setNome(e.target.value)} required/>

                            <p>Email</p>
                            <input type="email" name="email" id="email" onChange={e => setEmail(e.target.value)} required/>

                            <p>Senha</p>
                            <input type="password" name="password" id="password" onChange={e => setSenha(e.target.value)} required/>

                            <p>Confirma senha</p>
                            <input type="password" name="password" id="password" required/>

                            <div className="arrow">
                                <h2>Cadastrar novo colaborador</h2>
                                <button type="submit" >
                                    <BiIcons.BsArrowRight/>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default ModalCollaborator;