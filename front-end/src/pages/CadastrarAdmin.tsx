import background from '../images/background.png';
import { Link } from 'react-router-dom';

import { useFormik } from 'formik';
import * as Yup from 'yup';

import '../styles/pages/cadastrarAdmin.css';
import { validations } from '../validation/validation';
import { ErrorMessage } from '../styles/validationStyled/validationStyled';

export const CadastrarAdmin: React.FC = () => {
    const formik = useFormik({
        initialValues: { nome: '', nome_da_empresa: '' },
        validationSchema: Yup.object(validations),
        onSubmit: (values) => {},
    });

    return(
        <div className="container">
            <div className="img">
                <img src={background} alt="fundo" />
            </div>
            <div className="container-form">
                <form className="form" action="" method="POST" onSubmit={formik.handleSubmit}>
                    <div className="div-h1">
                        <h1 className="h1">Cadastramento</h1>
                    </div>
                    
                    <div className="content">
                        <div className="input-div">
                            <div>
                                <h1>Seu nome</h1>
                                <label className="sr-only" htmlFor="text">seu nome</label>
                                <input
                                 type="text" 
                                 name="nome"
                                 id="nome"
                                 onChange={formik.handleChange}
                                 value={formik.values.nome}
                                 />
                            </div>
                            {formik.errors.nome && formik.touched.nome && <ErrorMessage>{formik.errors.nome}</ErrorMessage>}
                        </div>
                        <div className="input-icons">
                            <div>
                                <h1>Nome da sua empresa</h1>
                                <label className="sr-only" htmlFor="nome_da_empresa">Nome da empresa</label>
                                <input type="text" name="nome_da_empresa" id="nome_da_empresa"
                                 onChange={formik.handleChange}
                                 value={formik.values.nome_da_empresa}
                                />
                            </div>
                            {formik.errors.nome_da_empresa && formik.touched.nome_da_empresa && <ErrorMessage>{formik.errors.nome_da_empresa}</ErrorMessage>}
                        </div>
                    </div>

                    <div className="button">
                        <div className="LinkPropsButton register">
                            <button className="continue">
                                CONTINUAR
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}