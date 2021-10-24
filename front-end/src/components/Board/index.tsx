import { useDrag, useDrop } from 'react-dnd';

import { Container, ContainerBoard } from './styles';
import { AddTask } from '../AddTask';
import Card from '../Card';

interface BoardCard {
    moveCard: () => void;
    card: boolean
}

export const Board: React.FC<BoardCard> = ({ moveCard }) => {
    const [{ canDrop, isOver }, dropRef] = useDrop({
        accept: 'card',
        drop: () => moveCard(),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
    }),

    });

    console.log('options', {canDrop, isOver })

    return (
        <ContainerBoard className="containerBoard" ref={dropRef}>
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