import Taskboard from '../components/task/taskboard/Taskboard';

// import { useState } from 'react'
// import { DndProvider } from 'react-dnd';
// import { HTML5Backend } from 'react-dnd-html5-backend';

import Sidebarkanbanboard from '../components/parts/SidebarKanbanboard';

import usePersistedState from '../utils/usePersistedState';

import GlobalStyle from '../styles/global';

import { ThemeProvider } from 'styled-components';

import light from '../styles/themes/light';
import dark from '../styles/themes/dark';

import { Container } from '../styles/components/parts/SidebarKanbanboard';

import { Board } from '../components/Board';

export function KanbanBoard() {
    const [theme, setTheme] = usePersistedState('theme', light);
    // const [index, setIndex] = useState(1);

    const toggleTheme = () => {
        setTheme(theme.title === 'light' ? dark : light);
    }

    // function moveCard() {
    //     setIndex(index)
    // }

    return (
        // <DndProvider backend={HTML5Backend}>
        <ThemeProvider theme={theme}>
            <Container>
                <GlobalStyle/>
                <Sidebarkanbanboard toggleTheme={toggleTheme}/>
                <Taskboard/>
                {/* <Board card={index === 1} moveCard={moveCard.bind(null, 1)}/> */}
            </Container>
        </ThemeProvider>
    // </DndProvider>
    );
}