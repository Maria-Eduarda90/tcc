import { useState } from "react"
import { DragDropContext, Draggable, Droppable, DropResult } from "react-beautiful-dnd"

import * as C from '../Card/style';

const listItems = [
    {
        id: "1",
        name: "Study Spanish"
    },
    {
        id: "2",
        name: "Workout"
    },
    {
        id: "3",
        name: "Film Youtube"
    },
    {
        id: "4",
        name: "Grocery Shop"
    }
]

function Teste() {
    const [todo, setTodo] = useState(listItems)

    const onDragEnd = (result: DropResult) => {
        const { source, destination } = result
        if (!destination) return

        const items = Array.from(todo)
        const [newOrder] = items.splice(source.index, 1)
        items.splice(destination.index, 0, newOrder)

        setTodo(items)
    }
    return (
        <div className="App">
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="todo">
                    {(provided) => (
                        <div className="todo" {...provided.droppableProps} ref={provided.innerRef}>
                            {todo.map(({ id, name }, index) => {
                                return (
                                    <Draggable key={id} draggableId={id} index={index}>
                                        {(provided, snapshot) => (
                                            <C.Container
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                style={(snapshot.isDragging, provided.draggableProps.style)}
                                            >
                                                <div className="containerCard">
                                                <h1>{name}</h1>
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
                                        )}
                                    </Draggable>
                                )
                            })}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    )
}

export default Teste;
