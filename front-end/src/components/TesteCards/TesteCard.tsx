import { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { v4 as uuid } from 'uuid';

const itemsFromBackend = [
    {id: uuid(), content: 'First task'},
    {id: uuid(), content: 'Second task'}
]

const columnsFromBackend = [
    {
        [uuid()]: {
            name: 'Todo',
            items: [itemsFromBackend]
        }
    }
];

export const TesteCard = () => {
    return(
        <div style={{ display: 'flex', justifyContent: 'center', height: '100%'}}>
            <DragDropContext onDragEnd={result => console.log(result)}>

            </DragDropContext>
        </div>
    );
}