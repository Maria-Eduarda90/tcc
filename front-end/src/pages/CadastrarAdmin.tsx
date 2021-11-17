import { useState, useContext } from 'react';
import background from '../images/background.png';
import { NavLink } from 'react-router-dom';
import UserContext from "../context/user/context";


import '../styles/pages/cadastrarAdmin.css';


export function CadastrarAdmin() {
    const [name, setName] = useState('');
    const [nameEmpresa, setNameEmpresa] = useState('');

    
    const { setState: setGlobalState } = useContext(UserContext);

    function handleSubmit() {
        setGlobalState({ name, nameEmpresa });
    }



    const handlerInput = () => {
        if (name.length >= 5 && nameEmpresa.length >= 5) {
            return true;
        }
    }
    const validateInput = handlerInput();

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

                            </div>
                        </div>
                        <div className="input-icons">
                            <div>
                                <h1>Nome da sua empresa</h1>
                                <label className="sr-only" htmlFor="text">Nome da empresa</label>
                                <input type="text" name="text" id="text" onChange={e => setNameEmpresa(e.target.value)} required />
                                <label className="sr-only" htmlFor="nome_da_empresa">Nome da empresa</label>

                            </div>
                        </div>
                    </div>

                    <div className="button">
                        <NavLink to="/createToken" className="LinkPropsButton register">
                            <button onClick={handleSubmit} className={validateInput ? "continueCorazul" : "continue"} disabled={!validateInput} >
                                CONTINUAR
                            </button>
                        </NavLink>
                    </div>
            </div>
        </div>
    );
}