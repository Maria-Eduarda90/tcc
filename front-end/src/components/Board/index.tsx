import * as C from './style';
import { Card } from '../Card';

export const Board = () => {
    return(
        <C.ContainerBoard>
            <C.Container>
                <div className="board">
                    <h1>Recebidos</h1>
                    <div>
                        <Card/>
                    </div>
                </div>
            </C.Container>
        </C.ContainerBoard>
    )   
} 