import background from '../images/background.png';
import { Button } from '../components/Button';
import '../styles/pages/createToken.css';

export function CreateToken() {
    return (
        <div className="container">
            <div className="img">
                <img src={background} alt="fundo" />
            </div>
            <div className="container-form">
            <form  className="form-token" action="" method="POST">
                <div className="input-div">
                    <div className="div-icon">
                        <h1>Seu email</h1>
                        <label className="sr-only" htmlFor="email">email</label>
                        <input type="email" name="email" id="email" required />
                    </div>
                </div>
                <div className="input-icons">
                    <div className="div-iconTwo">
                        <h1>Senha</h1>
                        <label className="sr-only" htmlFor="password">senha</label>
                        <input type="password" name="password" id="password" required />
                    </div>
                </div>
                <div className="input-icons">
                    <div className="div-iconTwo">
                        <h1>Confirmar sua senha</h1>
                        <label className="sr-only" htmlFor="password">senha</label>
                        <input type="password" name="password" id="password" required />
                    </div>
                </div>
                <div className="token">
                    <div>
                        <h1>Token de acesso</h1>
                        <label className="sr-only" htmlFor="password">senha</label>
                        <input type="password" name="password" id="password" placeholder="XDA-CDA-ETRT-34DS" required />
                    </div>
                </div>
                <div className="buttons finish">
                    <Button>
                        Finalizar
                    </Button>
                </div>
            </form>
            </div>
        </div>
    );
}