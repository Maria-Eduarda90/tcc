import React,{ useState } from 'react';
import background from '../images/background.png';
import { Link } from 'react-router-dom';

import '../styles/pages/cadastrarAdmin.css';

export function CadastrarAdmin(){
    const [name, setName] = useState('');
    const [nameEmpresa, setNameEmpresa] = useState('');

    const handlerInput = () =>{
        if(name.length >= 5 && nameEmpresa.length >= 5 ){
            return true;
        }
    }

    var validateInput = handlerInput();
    return(
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
                                <input type="text" name="text" id="text" onChange={e => setName(e.target.value)} required/>
                            </div>
                        </div>
                        <div className="input-icons">
                            <div>
                                <h1>Nome da sua empresa</h1>
                                <label className="sr-only" htmlFor="text">Nome da empresa</label>
                                <input type="text" name="text" id="text" onChange={e => setNameEmpresa(e.target.value)} required/>
                            </div>
                        </div>
                    </div>

                    <div className="button">
                            <button className={validateInput ? "continueCorazul" : "continue"} disabled = {!validateInput}>
                                CONTINUAR
                            </button>
                    </div>
                </form>
            </div>
        </div>
    );
}