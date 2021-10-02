import { ContainerUserTask } from '../styles/components/userTask';

export function UserTask() {
    return(
        <ContainerUserTask>
            <div className="ContainerUserTask">
            <div className="UserTaks">
                <div className="Distributed Task">
                    <p>Distribuidas</p>
                    <h1>15</h1>
                </div>
                <div className="blocked Task">
                    <p>Bloqueadas</p>
                    <h1>2</h1>
                </div>
                <div className="InProgress Task">
                    <p>Em andamento</p>
                    <h1>15</h1>
                </div>
                <div className="Finished Task">
                    <p>Finalizadas</p>
                    <h1>15</h1>
                </div>
                <div className="CommentsAdded Task">
                    <p>Comentários adicionados</p>
                    <h1>15</h1>
                </div>
            </div>
            </div>
        </ContainerUserTask>
    ); 
}