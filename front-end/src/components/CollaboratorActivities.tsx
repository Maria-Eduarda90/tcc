import '../styles/components/CollaboratorActivities.css';
import { ContainerUserTask } from '../styles/components/CollaboratorActivities';

import message from '../images/message.svg';
import attach from '../images/attach.svg';

export function CollaboratorActivities() {
    return (
        <ContainerUserTask>
            <div  className="ContainerUserTask">
                <div className="ContainerDivButton">
                    <button className="enter">Nova Tarefa</button>
                    <button className="LinkButton filter">Filtrar</button>
                </div>

                <table>
                    <thead>
                        <tr>
                            <th>colaboradores</th>
                            <th>Tarefas</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><img src="https://i.pinimg.com/originals/43/17/19/431719fbf11680dda780e19cfb40b013.jpg" alt="perfil" /></td>
                            <tr>
                                <td>Maria Eduarda</td>
                                <td>teste@gmail.com</td>
                            </tr>
                        </tr>
                        <tr>
                            <td>adkaskdj</td>
                            <td>Bloqueado</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </ContainerUserTask>
    );
}