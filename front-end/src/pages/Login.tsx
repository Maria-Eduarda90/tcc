import background from '../images/background.png';
import { Button } from '../components/Button';

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
                            <h1>Seu email/usuário</h1>
                            <label className="sr-only" htmlFor="email">email</label>
                            <input type="email" name="email" id="email" required/>
                        </div>
                    </div>
                    <div className="input-icons">
                        <div className="div-iconTwo">
                            <h1>Senha</h1>
                            <label className="sr-only" htmlFor="password">senha</label>
                            <input type="password" name="password" id="password" required/>
                        </div>
                    </div>

                    <div className="div-checkbox">
                        <input type="checkbox" name="checkbox" id="checkbox" />
                        <a href="">Lembrar senha?</a>
                        <a href="">Esqueci minha senha</a>
                    </div>

                    <div className="buttons">
                        <button>
                            entrar
                        </button>

                        <Button>
                            criar nova conta
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}