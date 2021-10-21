import { Container, ContainerBoard } from './styles';
import { AddTask } from '../AddTask';
import Card from '../Card';

export function Board() {
    return (
        <ContainerBoard className="containerBoard">
            <Container>
                <div className="board">
                    <h1 className="title">Recebidos</h1>
                    <div>
                        <Card />
                    </div>
                    <AddTask/>
                </div>

            </Container>

            <Container>
                <div className="board">
                    <h1 className="title">Em execução</h1>
                    <div>
                        
                    </div>
                </div>
            </Container>

            <Container>
                <div className="board">
                    <h1 className="title">Bloqueado</h1>
                    <div>
                        
                    </div>
                </div>
            </Container>

            <Container>
                <div className="board">
                    <h1 className="title">finalizado</h1>
                    <div>
                        
                    </div>
                </div>
            </Container>
        </ContainerBoard>
    );
}