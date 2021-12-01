import background from '../images/background.png';
import { Link, useHistory } from 'react-router-dom';

import '../styles/pages/login.css'
import { useState } from 'react';
import api from '../services/api';


interface ITokenMessage {
    id: string;
    token: number;
    message: string
}

export function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');



    const  handleSubmit = async (ev:  React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        const data = {
            'email': email,
            'senha': senha,
        }

        const autenticated = await api.post('/auth', data);
        console.log("autenticated: ", autenticated);
        const getInformationToken: ITokenMessage = autenticated.data;
        try{
            if (getInformationToken.token == 1234) {
                alert(getInformationToken.message);
                history.push(`/dashboard/${getInformationToken.id}`);
            }else if (getInformationToken.token == 12345) {
                alert(getInformationToken.message);
                history.push(`/kanbanboard/${getInformationToken.id}`);
            }else {
                alert(getInformationToken.message);
                setEmail('');
                setSenha('');
            }
        } catch (error) {
            alert('Erro interno, tente novamente mais tarde!');
        }
        
    }

    const disabledButton = email.includes('@' && '.com') && senha.length >= 6;
    const validarCamposEmail = () => {
        if (!email.includes('@' && '.com') && email.length > 0) {
            return <span><br />campo precisa ser email: teste@gmail.com</span>
        }
    }

    const validarCampoSenha = () => {
        if (senha.length > 0 && senha.length <= 5 ) {
            return <span><br />Campos não pode ser menor 6 caracteres</span>
        }
    }

    const messageEmail = validarCamposEmail();
    const messageSenha = validarCampoSenha();

    return (
        <div className="container">
            <div className="img">
                <img src={background} alt="fundo" />
            </div>
            <div className="container-form">
                <form action="" method="POST" onSubmit={handleSubmit}>
                    <div className="input-div">
                        <div className="div-icon">
                            <h1>Seu email</h1>
                            <label className="sr-only" htmlFor="email">email</label>
                            <input type="text" name="email" id="email" onChange={e => setEmail(e.target.value)} value={email} />
                            {messageEmail}
                        </div>
                    </div>
                    <div className="input-icons">
                        <div className="div-iconTwo">
                            <h1>Senha</h1>
                            <label className="sr-only" htmlFor="senha">senha</label>
                            <input type="password" name="senha" id="senha" onChange={e => setSenha(e.target.value)} value={senha} />
                            {messageSenha}
                        </div>
                    </div>

                    <div className="div-checkbox">
                        <a href="">Esqueci minha senha</a>
                    </div>

                    <div className="buttons">
                        <button className={disabledButton ? 'enter' : 'noProssed'} disabled={!disabledButton}>
                            ENTRAR
                        </button>
                    </div>
                </form>
                <Link to="cadastrarAdmin" className="LinkPropsButton">
                    <button type="button" className="LinkButton" >
                        CRIAR NOVA CONTA
                    </button>
                </Link>
            </div>
        </div>
    );
}