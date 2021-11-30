import * as C from './style';
// import ReactKanban from 'react-kanban-dnd';
import React, { ReactNode, useState } from 'react'
import { Card } from '../Card';
import { useDrag, useDrop } from 'react-dnd';
import { ItemTypes } from './itemTypes';
import { ModalTasksRegister } from '../parts/ModalTasksRegister';

const tasks = [
    { _id: 1, title: "First Task", status: "backlog" },
    { _id: 2, title: "Second Task", status: "backlog" },
    { _id: 3, title: "Third Task", status: "backlog" },
    { _id: 4, title: "Fourth Task", status: "new" },
    { _id: 5, title: "Fifth Task", status: "new" },
    { _id: 6, title: "Sixth Task", status: "going" },
    { _id: 7, title: "Seventh Task", status: "review" },
    { _id: 8, title: "Eighth Task", status: "review" },
    { _id: 9, title: "Ninth Task", status: "done" },
    { _id: 10, title: "Tenth Task", status: "done" },
  ];

export interface DustbinProps {
    moveCard: any;
}

export const Board: React.FC<DustbinProps> = ({ moveCard }) => {
    const [ teste1, setTaste ] = useState(tasks);
    const [hasDropped, setHasDropped] = useState(false);
    const [hasDroppedOnChild, setHasDroppedOnChild] = useState(false);

    const [{ isOver, isOverCurrent }, drop] = useDrop(
        () => ({
          accept: 'card',
          drop(item: unknown, monitor) {
            const didDrop = monitor.didDrop()
            if (didDrop) {
              return
            }
            setHasDropped(true)
            setHasDroppedOnChild(didDrop)
          },
          collect: (monitor) => ({
            isOver: monitor.isOver(),
            isOverCurrent: monitor.isOver({ shallow: true }),
          }),
        }),
        [setHasDropped, setHasDroppedOnChild],
      )

      console.log('options', {isOverCurrent, isOver});
      
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
            <C.Container ref={drop}>
                <div className="board">
                    <h1>Recebidos</h1>
                    <div>
                   {hasDropped && <span><Card/> {hasDroppedOnChild && ' on child'}</span>}
                    </div>
                </div>
                {/* <ModalTasksRegister/> */}
            </C.Container>
            <C.Container>
                <div className="board">
                    <h1>Recebidos</h1>
                    <div>
                        
                    </div>
                </div>
                {/* <ModalTasksRegister/> */}
            </C.Container>
            <C.Container>
                <div className="board">
                    <h1>Recebidos</h1>
                    <div>
                        
                    </div>
                </div>
                {/* <ModalTasksRegister/> */}
            </C.Container>
        </C.ContainerBoard>
    )   
} 
