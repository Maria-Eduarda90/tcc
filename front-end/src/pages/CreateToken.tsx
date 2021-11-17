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

    const handlerInput = () => {
        if (validateInformation) {
            return true;
        }
    }
    var validateInput = handlerInput();

    return (
        <div className="container">
            <div className="img">
                <img src={background} alt="fundo" />
            </div>
            <div className="container-form">
                <form className="form-token" onSubmit={handlerSubmit}  method="post">
                    <div className="input-div">
                        <div className="div-icon">
                            <h1>Seu email</h1>
                            <label className="sr-only" htmlFor="email">email</label>
                            <input type="email" name="email" id="email" required onChange={e => setEmail(e.target.value)} />

                        </div>
                    </div>
                    <div className="input-icons">
                        <div className="div-iconTwo">
                            <h1>Senha</h1>
                            <label className="sr-only" htmlFor="password">senha</label>
                            <input type="password" name="password" id="password" required onChange={e => setSenha(e.target.value)} />

                        </div>
                    </div>
                    <div className="input-icons">
                        <div className="div-iconTwo">
                            <h1>Confirmar sua senha</h1>
                            <label className="sr-only" htmlFor="passwordConfirm">confirmSenha</label>
                            <input type="password" name="passwordConfirm" id="passwordConfirm" required onChange={e => setConfirmSenha(e.target.value)} />
                            <label className="sr-only" htmlFor="password">senha</label>

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
                        <input type="submit" className="LinkButton" value="FINALIZAR" />
                    </div>
                </form>
            </div>
        </div>
    );
}