import '../styles/components/CollaboratorActivities.css';
import { ContainerUserTask } from '../styles/components/CollaboratorActivities';
import { ModalTasksRegister } from './parts/ModalTasksRegister';

import message from '../images/message.svg';
import attach from '../images/attach.svg';

export function CollaboratorActivities() {
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

                        <div className="descriptionUser">
                            <div className="user">
                                <div className="image">
                                    <img src="https://i.pinimg.com/originals/43/17/19/431719fbf11680dda780e19cfb40b013.jpg" alt="profile" />
                                </div>
                                <div>
                                    <p>Maria Eduarda</p>
                                    <p>skywalkermeyh@gmail.com</p>
                                </div>
                            </div>
                            <div>
                                <p>Orçamento</p>
                                <p>Bloqueados</p>
                            </div>
                            <div  className="TasksComment">
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

                        <div className="descriptionUser">
                            <div className="user">
                                <div className="image">
                                    <img src="https://i.pinimg.com/originals/43/17/19/431719fbf11680dda780e19cfb40b013.jpg" alt="profile" />
                                </div>
                                <div>
                                    <p>Maria Eduarda</p>
                                    <p>skywalkermeyh@gmail.com</p>
                                </div>
                            </div>
                            <div>
                                <p>Orçamento</p>
                                <p>Bloqueados</p>
                            </div>
                            <div  className="TasksComment">
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
                    </div>
                </div>
            </div>
        </ContainerUserTask>
    );
}