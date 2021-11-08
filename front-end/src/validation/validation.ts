import * as Yup from 'yup';

export const validations = {
    nome: Yup.string().required("Preencha o campo nome.").min(3, "Minimo de 3 caracteres.").max(200, "Maximo de 200 caracteres."),
    nome_da_empresa: Yup.string().required("preencher o campo Nome da empres").min(3, "Minimo de 8 caracteres.").max(200, "Maximo de 200 caracteres."),
    email: Yup.string().required("Preencha o campo e-mail").email("Preencha um e-mail valido.").max(200, "Maximo de 200 caracteres."),
    senha: Yup.string().required("Preencha o campo Senha.").min(8, "Minimo de 8 caracteres.").max(200, "Maximo de 200 caracteres"),
    confirmacao: Yup.string().required("Preencha o campo Confirmação").oneOf([Yup.ref('senha'), null], 'Senhas não correspondem'),
}