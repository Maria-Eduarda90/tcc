import { useState } from 'react';
import background from '../images/background.png';
import { Link } from 'react-router-dom';


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
                <form className="form" action="" method="POST">
                    <div className="div-h1">
                        <h1 className="h1">Cadastramento</h1>
                    </div>

                    <div className="content">
                        <div className="input-div">
                            <div>
                                <h1>Seu nome</h1>
                                <label className="sr-only" htmlFor="text">seu nome</label>
                                <input type="text" name="text" id="text" onChange={e => setName(e.target.value)} required />
                                {validateName ? null : <p><span>O seu nome precisa ter no mínimo 5 characters</span></p> }
                            </div>
                        </div>
                        <div className="input-icons">
                            <div>
                                <h1>Nome da sua empresa</h1>
                                <label className="sr-only" htmlFor="text">Nome da empresa</label>
                                <input type="text" name="text" id="text" onChange={e => setNameEmpresa(e.target.value)} required />
                                <label className="sr-only" htmlFor="nome_da_empresa">Nome da empresa</label>
                                {validateNameEmpresa ? null : <p><span>O nome da empresa precisa ter no mínimo 5 characters</span></p> }
                               
                            </div>
                        </div>
                    </div>

                    <div className="button">
                        <Link to="createToken" className="LinkPropsButton register">
                            <button className={validateCamposButton ? "continueCorazul" : "continue"} disabled={!validateCampos}>
                                CONTINUAR
                            </button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}