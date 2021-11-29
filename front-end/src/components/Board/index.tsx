import * as C from './style';
import { Card } from '../Card';
// import { ModalTasksRegister } from '../parts/ModalTasksRegister';


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
                {/* <ModalTasksRegister/> */}
            </C.Container>
            <C.Container>
                <div className="board">
                    <h1>Recebidos</h1>
                    <div>
                        <Card/>
                    </div>
                </div>
                {/* <ModalTasksRegister/> */}
            </C.Container>
        </C.ContainerBoard>
    )   
} 