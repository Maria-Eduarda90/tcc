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


export function KanbanBoard() {
    const [theme, setTheme] = usePersistedState('theme', light);
    // const [index, setIndex] = useState(1);

    const toggleTheme = () => {
        setTheme(theme.title === 'light' ? dark : light);
    }

    return(
            <ThemeProvider theme={theme}>
                <Container>
                    <GlobalStyle/>
                    <Sidebarkanbanboard toggleTheme={toggleTheme}/>
                </Container>
            </ThemeProvider>
    );
}