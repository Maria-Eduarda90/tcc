import Sidebarkanbanboard from '../components/parts/SidebarKanbanboard';

import usePersistedState from '../utils/usePersistedState';

import GlobalStyle from '../styles/global';

import { ThemeProvider } from 'styled-components';

import light from '../styles/themes/light';
import dark from '../styles/themes/dark';

export function KanbanBoard() {
    const [ theme, setTheme ] = usePersistedState('theme', light);

    const toggleTheme = () => {
        setTheme(theme.title === 'light' ? dark : light);
    }

    return(
        <ThemeProvider theme={theme}>
            <div>
                <GlobalStyle/>
                <Sidebarkanbanboard toggleTheme={toggleTheme}/>
            </div>
        </ThemeProvider>
    );
}