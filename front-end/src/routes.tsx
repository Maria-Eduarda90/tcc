import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Login } from './pages/Login';
import { CadastrarAdmin } from './pages/CadastrarAdmin';
import { CreateToken } from './pages/CreateToken';

export function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/cadastrarAdmin" component={CadastrarAdmin}/>
                <Route path="/createToken" component={CreateToken}/>
            </Switch>
        </BrowserRouter>
    );
}