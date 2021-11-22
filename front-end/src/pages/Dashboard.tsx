import Sidebar from '../components/Sidebar';
import { UserTask } from '../components/UserTask';
import { CollaboratorActivities } from '../components/CollaboratorActivities';

import GlobalStyle from '../styles/global';

import { ThemeProvider } from 'styled-components';
import usePersistedState from '../utils/usePersistedState';

import light from '../styles/themes/light';
import dark from '../styles/themes/dark';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';
import { PropsAdm, PropsAdmParams } from '../utils/structAdm';


export function Dashboard() {
    const [ theme, setTheme ] = usePersistedState('theme', light);

    const params = useParams<PropsAdmParams>();
    const [adm, setAdm] = useState<PropsAdm>();


    useEffect(() => {
        console.log("antes")
        api.get(`/adm`).then(response => {
            setAdm(response.data);
            console.log(response);
            console.log("dentro")

        });
        console.log("depois")

    }, [params.id]);

    if (!adm) {
        <p>carregando...</p>
    }

    const toggleTheme = () => {
        setTheme(theme.title === 'light' ? dark : light);
    }

    return(
        <ThemeProvider theme={theme}>
            <div>
                <GlobalStyle/>
                <Sidebar toggleTheme={toggleTheme} propsAdm={adm}/>
                <UserTask/>
                <CollaboratorActivities/>
            </div>
        </ThemeProvider>
    );
}
