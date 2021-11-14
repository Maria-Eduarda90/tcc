import { useEffect, useState } from 'react'
import background from '../images/background.png';
import { Link } from 'react-router-dom';
import api from '../services/api';

import '../styles/pages/login.css'

export function Login(){

    return(
        <div className="container">
            <div className="img">
                <img src={background} alt="fundo" />
            </div>
            <div className="container-form">
                <form action="" method="POST">
                    <div className="input-div">
                        <div className="div-icon">
                            <h1>Seu email</h1>
                            <label className="sr-only" htmlFor="email">email</label>
                            <input type="text" name="email" id="email" required/>
                        </div>
                    </div>
                    <div className="input-icons">
                        <div className="div-iconTwo">
                            <h1>Senha</h1>
                            <label className="sr-only" htmlFor="senha">senha</label>
                            <input type="password" name="senha" id="senha" required/>
                        </div>
                    </div>

                    <div className="div-checkbox">
                        <input type="checkbox" name="checkbox" id="checkbox" />
                        <a href="">Lembrar senha?</a>
                        <a href="">Esqueci minha senha</a>
                    </div>

                    <div className="buttons">
                        <button className="enter">
                            ENTRAR
                        </button>
                    </div>
                </form>
                <Link to="cadastrarAdmin" className="LinkPropsButton">
                    <button className="LinkButton">
                        CRIAR NOVA CONTA
                    </button>
                </Link>
            </div>
        </div>
    );
}