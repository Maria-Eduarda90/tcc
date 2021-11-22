import { useState } from 'react';
import background from '../images/background.png';
import '../styles/pages/createToken.css';
import { ErrorMessage } from '../styles/validationStyled/validationStyled'



export function CreateToken() {
    
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmSenha, setConfirmSenha] = useState('');
    const [token, setToken] = useState('');
    
    const validateSenha = senha.length >= 5;
    const validateConfirmSenha = confirmSenha.length >= 5;
    const validateEmail = email.length >= 5;
    const validateToken = token.length >= 9;


    const validateCampos = () => {
        if (validateSenha && validateEmail && validateConfirmSenha && validateToken) {
            return true;
        }
       
    }


    const senhaPrecisaSerIgual = () => {
        if(senha != confirmSenha){
            return true;
        }
        
    }


    var validateInput = validateCampos();
    var validarSenha = senhaPrecisaSerIgual();



   

    return (
        <div className="container">
            <div className="img">
                <img src={background} alt="fundo" />
            </div>
            <div className="container-form">
            <form  className="form-token" action="" method="POST" >
                <div className="input-div">
                    <div className="div-icon">
                        <h1>Seu email</h1>
                        <label className="sr-only" htmlFor="email">email</label>
                        <input type="email" name="email" id="email" required onChange={e => setEmail(e.target.value)}/>
                        {validateEmail ? null : <p><ErrorMessage>O email precisa possuir pelo menos 5 characters</ErrorMessage></p> }
                       
                         
                    </div>
                </div>
                <div className="input-icons">
                    <div className="div-iconTwo">
                        <h1>Senha</h1>
                        <label className="sr-only" htmlFor="password">senha</label>
                        <input type="password" name="password" id="password" required onChange={e => setSenha(e.target.value)}/>
                        {validateSenha ? null : <p><ErrorMessage>A senha precisa possuir pelo menos 8 characteres</ErrorMessage></p> }
                        {validarSenha ? <p><ErrorMessage>As senhas não são identicas</ErrorMessage></p> : null }
                        
                    </div>
                </div>
                <div className="input-icons">
                    <div className="div-iconTwo">
                        <h1>Confirmar sua senha</h1>
                        <label className="sr-only" htmlFor="password">confirmSenha</label>
                        <input type="password" name="password" id="password" required onChange={e => setConfirmSenha(e.target.value)} />
                        {validarSenha ? <p><ErrorMessage>As senhas não são identicas</ErrorMessage></p> : null }
                        <label className="sr-only" htmlFor="password">senha</label>
                       
                    </div>
                </div>
                <div className="token">
                    <div>
                        <h1>Token de acesso</h1>
                        <label className="sr-only" htmlFor="password">token</label>
                        <input type="text" name="password" id="password" placeholder="XXX-XXX-XXX" required onChange={e => setToken(e.target.value)} />
                    </div>
                </div>
                <div className={validateInput ? "button finishAzul" : "button finish"}>
                <button className="LinkButton">
                        FINALIZAR
                    </button>
                </div>
            </form>
            </div>
        </div>
    );
}