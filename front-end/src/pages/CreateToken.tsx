import { useState, useContext } from 'react';
import background from '../images/background.png';
import '../styles/pages/createToken.css';

import api from '../services/api';
import UserContext from '../context/user/context';

export function CreateToken() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmSenha, setConfirmSenha] = useState('');
    const [token, setToken] = useState('');
    const [images, setImages] = useState<File[]>([]);
    const { setState, state } = useContext(UserContext);


    const validateSenha = senha.length >= 5;
    const validateConfirmSenha = confirmSenha.length >= 5;
    const validateEmail = email.length >= 5;
    const validateToken = token.length >= 9;

    const validateInformation = email.length >= 5 && senha.length >= 5 && token.length >= 5;

    const handlerSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        // const data = {
        //     'nome': state.name,
        //     'nome_empresa': state.nameEmpresa,
        //     'email': email,
        //     'senha': senha,
        //     'chave_acesso': token,
        //     'images': images,
        // };
        const data = new FormData();
        data.append('nome', state.name);
        data.append('nome_empresa', state.nameEmpresa);
        data.append('email', email);
        data.append('senha', senha);
        data.append('chave_acesso', token);
        images.forEach(image => {
            data.append('images', image)
        });
        await api.post('/adm', data).then(response => console.log(response));
    }

    const validateCampos = () => {
        if (validateSenha && validateEmail && validateConfirmSenha && validateToken) {
            return true;
        }

    }

    const senhaPrecisaSerIgual = () => {
        if (senha != confirmSenha) {
            return true;
        }

    }


    const handlerInput = () => {
        if (validateInformation) {
            return true;
        }

    }
    var validateInput = handlerInput();


    var validateInput = validateCampos();
    var validarSenha = senhaPrecisaSerIgual();





    return (
        <div className="container">
            <div className="img">
                <img src={background} alt="fundo" />
            </div>
            <div className="container-form">
                <form className="form-token" onSubmit={handlerSubmit} method="post">
                    <div className="input-div">
                        <div className="div-icon">
                            <h1>Seu email</h1>
                            <label className="sr-only" htmlFor="email">email</label>
                            <input type="email" name="email" id="email" required onChange={e => setEmail(e.target.value)} />
                            {validateEmail ? null : <p><span>O email precisa possuir pelo menos 5 characters</span></p>}

                        </div>
                    </div>
                    <div className="input-icons">
                        <div className="div-iconTwo">
                            <h1>Senha</h1>
                            <label className="sr-only" htmlFor="password">senha</label>
                            <input type="password" name="password" id="password" required onChange={e => setSenha(e.target.value)} />
                            {validateSenha ? null : <p><span>A senha precisa possuir pelo menos 8 characteres</span></p>}
                            {validarSenha ? <p><span>As senhas não são identicas</span></p> : null}

                        </div>
                    </div>
                    <div className="input-icons">
                        <div className="div-iconTwo">
                            <h1>Confirmar sua senha</h1>
                            <label className="sr-only" htmlFor="passwordConfirm">confirmSenha</label>
                            <label className="sr-only" htmlFor="password">confirmSenha</label>
                            <input type="password" name="password" id="password" required onChange={e => setConfirmSenha(e.target.value)} />
                            {validateConfirmSenha ? null : <p><span>A senha precisa possuir pelo menos 8 characteres</span></p>}
                            {validarSenha ? <p><span>As senhas não são identicas</span></p> : null}

                        </div>
                    </div>
                    <div className="token">
                        <div>
                            <h1>Token de acesso</h1>
                            <label className="sr-only" htmlFor="password">token</label>
                            <input type="text" name="password" id="token" placeholder="XXX-XXX-XXX" required onChange={e => setToken(e.target.value)} />
                        </div>
                    </div>
                    <div className={validateInput ? "button finishAzul" : "button finish"}>
                        <button type="submit" className="LinkButton" >
                            FINALIZAR
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}