import Sidebar from '../components/Sidebar';
import { UserTask } from '../components/UserTask';
import { CollaboratorActivities } from '../components/CollaboratorActivities';

import GlobalStyle from '../styles/global';

import styled, { ThemeProvider } from 'styled-components';
import usePersistedState from '../utils/usePersistedState';

import light from '../styles/themes/light';
import dark from '../styles/themes/dark';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';
import { PropsAdm, PropsParams } from '../utils/estrutura_interfaces';

const LoadingPage = styled.p`

    display: flex;
    align-items: center;
    justify-content: center;

`;


export function Dashboard() {
    const [adm, setAdm] = useState<PropsAdm>();
    const [theme, setTheme] = usePersistedState('theme', light);
    const params = useParams<PropsParams>();



    useEffect(() => {
        api.get(`/adm/${params.id}`).then(response => {
            setAdm(response.data);
        });

    }, [params.id]);

    if (!adm) {
        return <LoadingPage>carregando...</LoadingPage>
    }

    const toggleTheme = () => {
        setTheme(theme.title === 'light' ? dark : light);
    }

    return (
        <ThemeProvider theme={theme}>
            <div>
                <GlobalStyle />
                <Sidebar toggleTheme={toggleTheme} propsAdm={adm} />
                <UserTask />
                <CollaboratorActivities />
            </div>
        </ThemeProvider>
    );
}
