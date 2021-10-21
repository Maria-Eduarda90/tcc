import background from '../images/background.png';
import { Link } from 'react-router-dom';

import '../styles/pages/login.css'

import { useFormik } from 'formik';
import * as Yup from 'yup';

import { validations } from '../validation/validation';

import { ErrorMessage } from '../styles/validationStyled/validationStyled';

export function Login(){
    const formik = useFormik({
        initialValues: { email: '', senha: ''},
        validationSchema: Yup.object(validations),
        onSubmit: (values) => {console.log()},
    });

    return(
        <div className="container">
            <div className="img">
                <img src={background} alt="fundo" />
            </div>
            <div className="container-form">
                <form action="" method="POST" onSubmit={formik.handleSubmit}>
                    <div className="input-div">
                        <div className="div-icon">
                            <h1>Seu email</h1>
                            <label className="sr-only" htmlFor="email">email</label>
                            <input type="text" name="email" id="email" onChange={formik.handleChange}
                         value={formik.values.email}/>
                        </div>
                        {formik.errors.email && formik.touched.email && <ErrorMessage>{formik.errors.email}</ErrorMessage>}
                    </div>
                    <div className="input-icons">
                        <div className="div-iconTwo">
                            <h1>Senha</h1>
                            <label className="sr-only" htmlFor="senha">senha</label>
                            <input type="password" name="senha" id="senha" onChange={formik.handleChange}
                         value={formik.values.senha}/>
                        </div>
                        {formik.errors.senha && formik.touched.senha && <ErrorMessage>{formik.errors.senha}</ErrorMessage>}
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