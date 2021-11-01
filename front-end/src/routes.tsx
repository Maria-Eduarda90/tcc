import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Login } from './pages/Login';
import { CadastrarAdmin } from './pages/CadastrarAdmin';
import { CreateToken } from './pages/CreateToken';
import { Dashboard } from './pages/Dashboard';
import { KanbanBoard } from './pages/KanbanBoard';
import { Teste } from './components/visualizar_tarefa/visualizar_tarefa';

export function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/cadastrarAdmin" component={CadastrarAdmin}/>
                <Route path="/createToken" component={CreateToken}/>
                <Route path="/dashboard" component={Dashboard}/>
                <Route path="/kanbanBoard" component={KanbanBoard}/>
                <Route path="/Teste" component={Teste}/>
            </Switch>
        </BrowserRouter>
    );
}