// import Taskboard from '../components/task/taskboard/Taskboard';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

// import { Board } from '../components/Board';
import  Teste  from '../components/Teste/Teste';

import Sidebarkanbanboard from '../components/parts/SidebarKanbanboard';

import usePersistedState from '../utils/usePersistedState';

import GlobalStyle from '../styles/global';

import { ThemeProvider } from 'styled-components';

import light from '../styles/themes/light';
import dark from '../styles/themes/dark';

import { Container } from '../styles/components/parts/SidebarKanbanboard';
import { useState } from 'react';


export function KanbanBoard() {
    const [theme, setTheme] = usePersistedState('theme', light);
    const toggleTheme = () => {
        setTheme(theme.title === 'light' ? dark : light);
    }

    return(
        // <DndProvider backend={HTML5Backend}>
            <ThemeProvider theme={theme}>
                <Container>
                    <GlobalStyle/>
                    <Sidebarkanbanboard toggleTheme={toggleTheme}/>
                    {/* <Taskboard/> */}
                    {/* <Board /> */}
                    <Teste/>
                </Container>
            </ThemeProvider>
        // {/* </DndProvider> */}
    );
}