import { Card } from '../components/Cards/Card';

import Sidebarkanbanboard from '../components/parts/SidebarKanbanboard';

import usePersistedState from '../utils/usePersistedState';

import GlobalStyle from '../styles/global';

import { ThemeProvider } from 'styled-components';

import light from '../styles/themes/light';
import dark from '../styles/themes/dark';

import { Container } from '../styles/components/parts/SidebarKanbanboard';

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
                    <Card/>
                </Container>
            </ThemeProvider>
        // {/* </DndProvider> */}
    );
}