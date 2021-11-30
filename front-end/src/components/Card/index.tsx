import { useDrag, useDrop } from 'react-dnd';
import { ItemTypes } from '../Board/itemTypes';

import * as C from './style';

export const Card: React.FC = () => {
    const [isDragging, drag] = useDrag(() => ({ type: 'card' }));
    // const [{ isDragging }, drag] = useDrag({
    //     type: "card",
    //     collect: monitor => ({
    //         isDragging: monitor.isDragging(),
    //     }),
    // });

    console.log('options', isDragging, drag);
   

    return (
        <C.Container ref={drag}>
            <div className="containerCard">
                <h1>Fazer orçamento</h1>
                <p>Orçamento de veículos para uma viagem de um servidor para o interior.</p>
                <p>
                    Orçamento de veículos para uma viagem de um servidor para o interior.
                </p>

                <div className="image">
                <div className="image ImageCard">
                    <img src="https://i.pinimg.com/originals/43/17/19/431719fbf11680dda780e19cfb40b013.jpg" alt="profile" />
                    <span>2</span>
                </div>
            </div>
            </div>
        </C.Container>
    );
} 
