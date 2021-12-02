import { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { v4 as uuid } from 'uuid';
import * as C from './card';
import * as B from './board';

interface IdroppableIdProps {
    droppableId: string;
    index: number;
}

const itemsFromBackend = [
    {
        id: uuid(),
        content: 'Fazer orçamento',
        description: 'Orçamento de veículos para uma viagem de um servidor para o interior.',
        priority: '1'
    },
    {
        id: uuid(),
        content: 'Fazer orçamento',
        description: 'Orçamento de veículos para uma viagem de um servidor para o interior.',
        priority: '1'
    },
]


const columnsFromBackend = {
    [uuid()]: {
        name: "Recebidos",
        items: itemsFromBackend
    },
    [uuid()]: {
        name: "Em execução",
        items: []
    },
    [uuid()]: {
        name: "Bloqueado",
        items: []
    },
    [uuid()]: {
        name: "finalizado",
        items: []
    },
};

const onDragEnd = (result: any, columns: any, setColumns: any) => {
    if (!result.destination) return console.log('teste', result.destination);
    const { source, destination } = result;
    if (source.droppableId !== destination.droppableId) {
        const sourceColumn = columns[source.droppableId];
        const destColumn = columns[destination.droppableId];
        const sourceItems = [...sourceColumn.items];
        const destItems = [...destColumn.items];
        const [removed] = sourceItems.splice(source.index, 1);
        destItems.splice(destination.index, 0, removed);
        setColumns({
            ...columns,
            [source.droppableId]: {
                ...sourceColumn,
                items: sourceItems
            },
            [destination.droppableId]: {
                ...destColumn,
                items: destItems
            }
        })
    } else {
        const column = columns[source.droppableId];
        const copiedItems = [...column.items];
        const [removed] = copiedItems.splice(source.index, 1);
        copiedItems.splice(destination.index, 0, removed);
        setColumns({
            ...columns,
            [source.droppableId]: {
                ...column,
                items: copiedItems
            }
        });
    }

};

export const TesteCard = () => {
    const [columns, setColumns] = useState(columnsFromBackend);
    return (
        <div style={{ display: 'flex', justifyContent: 'center', height: '100%' }}>
            <DragDropContext onDragEnd={result => onDragEnd(result, columns, setColumns)}>
                {Object.entries(columns).map(([id, column]) => {
                    return (
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            
                            <div style={{ margin: 15 }}>
                                <Droppable droppableId={id}>
                                    {(provided, snapshot) => {
                                        return (
                                            <B.ContainerBoardCard 
                                                {...provided.droppableProps}
                                                ref={provided.innerRef}
                                                style={{
                                                    background: snapshot.isDraggingOver ? '#f1f0f0' : 'white',
                                                    padding: 4,
                                                    width: 270,
                                                    minHeight: 500,
                                                    borderRadius: 8, 
                                                }} 
                                            >
                                                <h1>{column.name}</h1>
                                                {column.items.map((item, index) => {
                                                    return (
                                                        <Draggable key={item.id} draggableId={item.id} index={index}>
                                                            {(provided, snapshot) => {
                                                                return (
                                                                    <div
                                                                        ref={provided.innerRef}
                                                                        {...provided.draggableProps}
                                                                        {...provided.dragHandleProps}
                                                                    >
                                                                        <C.Container >
                                                                            <div className="containerCard">
                                                                                <h2>{item.content}</h2>
                                                                            
                                                                                <p>
                                                                                    {item.description}
                                                                                </p>

                                                                                <div className="image">
                                                                                    <div className="image ImageCard">
                                                                                        <img src="https://i.pinimg.com/originals/43/17/19/431719fbf11680dda780e19cfb40b013.jpg" alt="profile" />
                                                                                        <span>{item.priority}</span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </C.Container>

                                                                    </div>
                                                                )
                                                            }}
                                                        </Draggable>
                                                    )
                                                })}
                                                {provided.placeholder}
                                            </B.ContainerBoardCard >
                                        )
                                    }}
                                </Droppable>
                            </div>
                        </div>
                    )
                })}
            </DragDropContext>
        </div>
    );
}