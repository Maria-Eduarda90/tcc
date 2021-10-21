import background from '../images/background.png';
import '../styles/pages/createToken.css';

import { useFormik } from 'formik';
import * as Yup from 'yup';

import { validations } from '../validation/validation';

import { ErrorMessage } from '../styles/validationStyled/validationStyled';

export function CreateToken() {
    const formik = useFormik({
        initialValues: { email: '', senha: '', confirmacao: '' },
        validationSchema: Yup.object(validations),
        onSubmit: (values) => {},
    });

    return (
        <div className="container">
            <div className="img">
                <img src={background} alt="fundo" />
            </div>
            <div className="container-form">
            <form  className="form-token" action="" method="POST" onSubmit={formik.handleSubmit}>
                <div className="input-div">
                    <div className="div-icon">
                        <h1>Seu email</h1>
                        <label className="sr-only" htmlFor="email">email</label>
                        <input
                         type="text" 
                         name="email" 
                         id="email"
                         onChange={formik.handleChange}
                         value={formik.values.email}
                         />
                         
                    </div>
                    {formik.errors.email && formik.touched.email && <ErrorMessage>{formik.errors.email}</ErrorMessage>}
                </div>
                <div className="input-icons">
                    <div className="div-iconTwo">
                        <h1>Senha</h1>
                        <label className="sr-only" htmlFor="password">senha</label>
                        <input
                         type="password" 
                         name="senha"
                         id="senha" 
                         onChange={formik.handleChange}
                         value={formik.values.senha}/>
                    </div>
                    {formik.errors.senha && formik.touched.senha && <ErrorMessage>{formik.errors.senha}</ErrorMessage>}
                </div>
                <div className="input-icons">
                    <div className="div-iconTwo">
                        <h1>Confirmar sua senha</h1>
                        <label className="sr-only" htmlFor="password">senha</label>
                        <input
                         type="password" 
                         name="confirmacao" 
                         id="confirmacao" 
                         onChange={formik.handleChange}
                         value={formik.values.confirmacao}/>
                    </div>
                    {formik.errors.confirmacao && formik.touched.confirmacao && <ErrorMessage>{formik.errors.confirmacao}</ErrorMessage>}
                </div>
                <div className="token">
                    <div>
                        <h1>Token de acesso</h1>
                        <label className="sr-only" htmlFor="password">senha</label>
                        <input type="password" name="password" id="password" placeholder="XXX-XXX-XXX-XXX"/>
                    </div>
                </div>
                <div className="buttons finish">
                    <button className="LinkButton fontWeight">
                        FINALIZAR
                    </button>
                </div>
            </form>
            </div>
        </div>
    );
}