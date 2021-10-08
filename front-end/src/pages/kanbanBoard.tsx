import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import Sidebarkanbanboard from '../components/parts/SidebarKanbanboard';

import usePersistedState from '../utils/usePersistedState';

import GlobalStyle from '../styles/global';

import { ThemeProvider } from 'styled-components';

import light from '../styles/themes/light';
import dark from '../styles/themes/dark';

import { Board } from '../components/Board';

export function KanbanBoard() {
    const [ theme, setTheme ] = usePersistedState('theme', light);

    const toggleTheme = () => {
        setTheme(theme.title === 'light' ? dark : light);
    }

    return(
        <DndProvider backend={HTML5Backend}>
            <ThemeProvider theme={theme}>
                <div>
                    <GlobalStyle/>
                    <Sidebarkanbanboard toggleTheme={toggleTheme}/>
                    <Board/>
                </div>
            </ThemeProvider>
        </DndProvider>
    );
}