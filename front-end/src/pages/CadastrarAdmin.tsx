import background from '../images/background.png';
import { Button } from '../components/Button';

import '../styles/pages/cadastrarAdmin.css';

export function CadastrarAdmin(){
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
                                <input type="text" name="text" id="text" required/>
                            </div>
                        </div>
                        <div className="input-icons">
                            <div>
                                <h1>Nome da sua empresa</h1>
                                <label className="sr-only" htmlFor="text">Nome da empresa</label>
                                <input type="text" name="text" id="text" required/>
                            </div>
                        </div>
                    </div>

                    <div className="button">
                        <Button>
                            continuar
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}