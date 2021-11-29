import * as C from './style';
import ReactKanban from 'react-kanban-dnd';
// import React, { ReactNode, useState } from 'react'
// import { Card } from '../Card';
// import { useDrag, useDrop } from 'react-dnd';
// import { ItemTypes } from './itemTypes';
// import { ModalTasksRegister } from '../parts/ModalTasksRegister';

// export interface DustbinProps {
//     greedy?: boolean
//     children?: ReactNode
//   }
  
//   export interface DustbinState {
//     hasDropped: boolean
//     hasDroppedOnChild: boolean
//   }
  

// export const Board: React.FC<DustbinProps> = () => {
//     const [hasDropped, setHasDropped] = useState(false)
//     const [hasDroppedOnChild, setHasDroppedOnChild] = useState(false)
    
//     const [{ isOver, isOverCurrent }, drop] = useDrop(() => ({
//           accept: ItemTypes.BOX,
//           drop(item: unknown, monitor) {
//             const didDrop = monitor.didDrop()
//             if (didDrop) {
//               return
//             }
//             setHasDropped(true)
//             setHasDroppedOnChild(didDrop)
//           },
//           collect: (monitor) => ({
//             isOver: monitor.isOver(),
//             isOverCurrent: monitor.isOver({ shallow: true }),
//           }),
//         }),
//     )
//     return(
//         <C.ContainerBoard>
//             <C.Container ref={drop}>
//                 <div className="board">
//                     <h1>Recebidos</h1>
//                     <div>
//                         <Card/>
//                     </div>
//                 </div>
//                 {/* <ModalTasksRegister/> */}
//             </C.Container>
//             <C.Container>
//                 <div className="board">
//                     <h1>Recebidos</h1>
//                     <div>
                        
//                     </div>
//                 </div>
//                 {/* <ModalTasksRegister/> */}
//             </C.Container>
//             <C.Container>
//                 <div className="board">
//                     <h1>Recebidos</h1>
//                     <div>
                        
//                     </div>
//                 </div>
//                 {/* <ModalTasksRegister/> */}
//             </C.Container>
//             <C.Container>
//                 <div className="board">
//                     <h1>Recebidos</h1>
//                     <div>
                        
//                     </div>
//                 </div>
//                 {/* <ModalTasksRegister/> */}
//             </C.Container>
//         </C.ContainerBoard>
//     )   
// } 

// export interface DustbinProps {
//     greedy?: boolean
//     children?: ReactNode
//   }
  
//   export interface DustbinState {
//     hasDropped: boolean
//     hasDroppedOnChild: boolean
//   }
  
//   export const Board: React.FC<DustbinProps> = ({ greedy, children }) => {
  
//     const [, drop] = useDrop(
//       () => ({
//         accept: ItemTypes.Done,
//         collect: (monitor) => ({
//             isOver: monitor.isOver(),
//             canDrop: monitor.canDrop(),
//         }),
//       }),
//     )
//     return (
//         <C.ContainerBoard>
//             <C.Container ref={drop}>
//                 <div className="board">
//                     <h1>Recebidos</h1>
//                     <div>
//                         <Card/>
//                     </div>
//                 </div>
//                 {/* <ModalTasksRegister/> */}
//             </C.Container>
//             <C.Container>
//                 <div className="board">
//                     <h1>Recebidos</h1>
//                     <div>
                        
//                     </div>
//                 </div>
//                 {/* <ModalTasksRegister/> */}
//             </C.Container>
//             <C.Container>
//                 <div className="board">
//                     <h1>Recebidos</h1>
//                     <div>
                        
//                     </div>
//                 </div>
//                 {/* <ModalTasksRegister/> */}
//             </C.Container>
//             <C.Container>
//                 <div className="board">
//                     <h1>Recebidos</h1>
//                     <div>
                        
//                     </div>
//                 </div>
//                 {/* <ModalTasksRegister/> */}
//             </C.Container>
//         </C.ContainerBoard>
//     )
//   }
 

const columns = [
    {
      id: "column1",
      title: "Column 1",
      rows: [
        {
          id: "children1",
          name: "John",
          age: "21"
        },
        {
          id: "children2",
          name: "Alex",
          age: "33"
        }
      ]
    },
    {
      id: "column2",
      title: "Column 2",
      rows: [
        {
          id: "children3",
          name: "Michael",
          age: "29"
        },
        {
          id: "children4",
          name: "Carl",
          age: "26"
        }
      ]
    }
  ];
  
  const renderCard = (row: any) => (
    <C.ContainerBoard>
      <C.Container>
        <h1>Name:</h1>
        <span>{row.name}</span>
      </C.Container>
      <C.Container>
        <h1>Age:</h1>
        <span>{row.age}</span>
      </C.Container>
    </C.ContainerBoard>
  );
  
export const Board = () => (
      <ReactKanban
        columns={columns}
        renderCard={renderCard}
        onDragEnd={() => {}}
      />
  );