import { useState, useContext } from 'react';
import background from '../images/background.png';
import { ErrorMessage } from '../styles/validationStyled/validationStyled';
import { NavLink } from 'react-router-dom';
import UserContext from "../context/user/context";


import '../styles/pages/cadastrarAdmin.css';


export function CadastrarAdmin() {
    const [name, setName] = useState('');
    const [nameEmpresa, setNameEmpresa] = useState('');
    const validateName = name.length >= 5;
    const validateNameEmpresa = nameEmpresa.length >= 5;


    const { setState: setGlobalState } = useContext(UserContext);

    function handleSubmit() {
        setGlobalState({ name, nameEmpresa });
    }

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
                <div className="div-h1">
                    <h1 className="h1">Cadastramento</h1>
                </div>

                <div className="content">
                    <div className="input-div">
                        <div>
                            <h1>Seu nome</h1>
                            <label className="sr-only" htmlFor="text">seu nome</label>
                            <input type="text" name="text" id="text" onChange={e => setName(e.target.value)} required />
                            {validateName ? null : <p><ErrorMessage>O seu nome precisa ter no mínimo 5 characters</ErrorMessage></p>}
                        </div>
                    </div>
                    <div className="input-icons">
                        <div>
                            <h1>Nome da sua empresa</h1>
                            <label className="sr-only" htmlFor="text">Nome da empresa</label>
                            <input type="text" name="text" id="text" onChange={e => setNameEmpresa(e.target.value)} required />
                            <label className="sr-only" htmlFor="nome_da_empresa">Nome da empresa</label>
                            {validateNameEmpresa ? null : <p><ErrorMessage>O nome da empresa precisa ter no mínimo 5 characters</ErrorMessage></p>}

                        </div>
                        <div className="div-h1">
                            <h1 className="h1">Cadastramento</h1>
                        </div>
                        <div className="content">
                            <div className="input-div">
                                <div>
                                    <h1>Seu nome</h1>
                                    <label className="sr-only" htmlFor="text">seu nome</label>
                                    <input type="text" name="text" id="text" onChange={e => setName(e.target.value)} required />

                                    {validateName ? null : <p><span>O seu nome precisa ter no mínimo 5 characters</span></p>}
                                </div>
                            </div>
                            <div className="input-icons">
                                <div>
                                    <h1>Nome da sua empresa</h1>
                                    <label className="sr-only" htmlFor="text">Nome da empresa</label>
                                    <input type="text" name="text" id="text" onChange={e => setNameEmpresa(e.target.value)} required />
                                    <label className="sr-only" htmlFor="nome_da_empresa">Nome da empresa</label>
                                    {validateNameEmpresa ? null : <p><span>O nome da empresa precisa ter no mínimo 5 characters</span></p>}

                                </div>
                            </div>
                        </div>

                        <div className="button">
                            <NavLink to="/createToken" className="LinkPropsButton register">
                                <button onClick={handleSubmit} className={validateCamposButton ? "continueCorazul" : "continue"} disabled={!validateCamposButton} >
                                    CONTINUAR
                                </button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}