import { useState } from 'react';
import background from '../images/background.png';
import { Link } from 'react-router-dom';
import { ErrorMessage } from '../styles/validationStyled/validationStyled';


import '../styles/pages/cadastrarAdmin.css';

export function CadastrarAdmin() {
    const [name, setName] = useState('');
    const [nameEmpresa, setNameEmpresa] = useState('');

    const validateName = name.length >= 5;
    const validateNameEmpresa = nameEmpresa.length >= 5;

    const validateCampos = () => {
        if (validateNameEmpresa && validateName)
        return true;
    }

    var validateCamposButton = validateCampos();

    return (
        <div className="container">
            <div className="img">
                <img src={background} alt="fundo" />
            </div>
            <div className="container-form">
                <form className="form" action="/createToken">
                    <div className="div-h1">
                        <h1 className="h1">Cadastramento</h1>
                    </div>

                    <div className="content">
                        <div className="input-div">
                            <div>
                                <h1>Seu nome</h1>
                                <label className="sr-only" htmlFor="text">seu nome</label>
                                <input type="text" name="text" id="text" onChange={e => setName(e.target.value)} required />
                                {validateName ? null : <p><ErrorMessage>O seu nome precisa ter no mínimo 5 characters</ErrorMessage></p> }
                            </div>
                        </div>
                        <div className="input-icons">
                            <div>
                                <h1>Nome da sua empresa</h1>
                                <label className="sr-only" htmlFor="text">Nome da empresa</label>
                                <input type="text" name="text" id="text" onChange={e => setNameEmpresa(e.target.value)} required />
                                <label className="sr-only" htmlFor="nome_da_empresa">Nome da empresa</label>
                                {validateNameEmpresa ? null : <p><ErrorMessage>O nome da empresa precisa ter no mínimo 5 characters</ErrorMessage></p> }
                               
                            </div>
                        </div>
                    </div>

                    <div className="button">
                        <div className="LinkPropsButton register">
                            <button className={validateCamposButton ? "continueCorazul" : "continue"} disabled={!validateCampos}>
                                CONTINUAR
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}