import Sidebar from '../components/Sidebar';
import { UserTask } from '../components/UserTask';
import { CollaboratorActivities } from '../components/CollaboratorActivities';

import GlobalStyle from '../styles/global';

import { ThemeProvider } from 'styled-components';
import usePersistedState from '../utils/usePersistedState';

import light from '../styles/themes/light';
import dark from '../styles/themes/dark';

export function Dashboard() {
    const [ theme, setTheme ] = usePersistedState('theme', light);

    const toggleTheme = () => {
        setTheme(theme.title === 'light' ? dark : light);
    }

    return(
        <ThemeProvider theme={theme}>
            <div>
                <GlobalStyle/>
                <Sidebar toggleTheme={toggleTheme}/>
                <UserTask/>
                <CollaboratorActivities/>
            </div>
        </ThemeProvider>
    );
}
