import { useState, useContext } from 'react';
import background from '../images/background.png';
import '../styles/pages/createToken.css';
import { ErrorMessage } from '../styles/validationStyled/validationStyled'


import api from '../services/api';
import UserContext from '../context/user/context';
import { useHistory } from 'react-router-dom';
import { exit } from 'process';


export function CreateToken() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmSenha, setConfirmSenha] = useState('');
    const [token, setToken] = useState('');
    const [images, setImages] = useState<File[]>([]);
    const { setState, state } = useContext(UserContext);
    const chaves_acessos = [
        "XAV-BCX-AHJ",
        "XAA-BCA-AKJ",
        "KKV-BCX-BBJ",
        "XTT-BCX-WEJ",
    ];


    const validateSenha = senha.length >= 5;
    const validateConfirmSenha = confirmSenha.length >= 5;
    const validateEmail = email.length >= 5;
    const validateToken = token.length >= 9;
    const validateInformation = email.length >= 5 && senha.length >= 5 && token.length >= 5;

    const validarToken = () => {
        for (var i = 0; i < chaves_acessos.length; i++) {
            if (token == chaves_acessos[i]) {
                return true;
            }
            else {
                return false;
            }
        }
    }
    const isApprove = validarToken();

    const handlerSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
        if (isApprove) {
            ev.preventDefault();
            try {
                const data = new FormData();
                data.append('nome', state.name);
                data.append('nome_empresa', state.nameEmpresa);
                data.append('email', email);
                data.append('senha', senha);
                data.append('chave_acesso', token);
                images.forEach(image => {
                    data.append('images', image)
                });
                const created = await api.post('/adm', data);

                if (created.status == 201) {
                    alert('Cadastro realizado com sucesso!');
                    history.push('/');
                }
            } catch (error) {
                console.log(error);
                alert('Erro interno, tente novamente mais tarde!');
            }
        }
        else {
            ev.preventDefault();
            alert("Chave de acesso inválida. \nContate seu administrador!")
        }

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
                            {validateEmail ? null : <p><ErrorMessage>O email precisa possuir pelo menos 5 characters</ErrorMessage></p>}


                        </div>
                    </div>
                    <div className="input-icons">
                        <div className="div-iconTwo">
                            <h1>Senha</h1>
                            <label className="sr-only" htmlFor="password">senha</label>
                            <input type="password" name="password" id="password" required onChange={e => setSenha(e.target.value)} />
                            {validateSenha ? null : <p><ErrorMessage>A senha precisa possuir pelo menos 8 characteres</ErrorMessage></p>}
                            {validarSenha ? <p><ErrorMessage>As senhas não são identicas</ErrorMessage></p> : null}
                        </div>
                    </div>
                    <div className="input-icons">
                        <div className="div-iconTwo">
                            <h1>Confirmar sua senha</h1>
                            <label className="sr-only" htmlFor="passwordConfirm">confirmSenha</label>
                            <input type="password" name="passwordConfirm" id="passwordConfirm" required onChange={e => setConfirmSenha(e.target.value)} />
                            {validarSenha ? <p><ErrorMessage>As senhas não são identicas</ErrorMessage></p> : null}
                            <label className="sr-only" htmlFor="password">senha</label>

                        </div>
                    </div>
                    <div className="token">
                        <div>
                            <h1>Token de acesso</h1>
                            <label className="sr-only" htmlFor="token">token</label>
                            <input type="text" name="token" id="token" placeholder="XXX-XXX-XXX" required onChange={e => setToken(e.target.value)} />
                        </div>
                        <div className={validateInput && validarToken ? "button finishAzul" : "button finish"}>
                            <button type="submit" className="LinkButton" >
                                FINALIZAR
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}