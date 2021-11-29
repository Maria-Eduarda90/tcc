import '../styles/components/CollaboratorActivities.css';
import { ContainerUserTask } from '../styles/components/CollaboratorActivities';
import { ModalTasksRegister } from './parts/ModalTasksRegister';

import message from '../images/message.svg';
import attach from '../images/attach.svg';
import { useEffect, useState } from 'react';
import api from '../services/api';
import { IColaboradorProp, IStatusCadastroColaborador } from '../utils/estrutura_interfaces';


export function CollaboratorActivities() {
    const [colaborador, setColaborador] = useState<IColaboradorProp[]>([]);

    useEffect(() => {
        api.get(`/colaborador`).then(response => {
            setColaborador(response.data);
        });
    }, [colaborador]);

    return (
        <ContainerUserTask>
            <div className="ContainerUserTask">
                <ModalTasksRegister />

                <div className="cadDescriptionUser">
                    <div className="Description">
                        <div className="titleActivities">
                            <div className="titleMargin">
                                <div>
                                    <h1 className="text">Colaborador</h1>
                                </div>
                                <div>
                                    <h1 className="text">Tarefas</h1>
                                </div>
                                <div>
                                    <h1 className="text">Movimentação</h1>
                                </div>
                                <div>
                                    <h1 className="text">Última atividade</h1>
                                </div>
                            </div>
                        </div>
                        {colaborador.map(colaborad => {
                            return (
                                <div className="descriptionUser">
                                    <div className="user">
                                        <div className="image">
                                            <img src={colaborad?.images[0]?.url ?? "https://styles.redditmedia.com/t5_3saob8/styles/communityIcon_nbdzwdzb9md61.png"} alt="profile" />
                                        </div>
                                        <div>
                                            <p>{colaborad?.nome}</p>
                                            <p>{colaborad?.email}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p>Orçamento</p>
                                        <p>Bloqueados</p>
                                    </div>
                                    <div className="TasksComment">
                                        <div className="message">
                                            <span>1</span>
                                            <img src={message} alt="message" />
                                            <span>0</span>
                                            <img src={attach} alt="anexar" />
                                        </div>
                                        <div className="space">
                                            <p>Comentarios adicionados</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <p>3 minutos atrás</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </ContainerUserTask>
    );
}