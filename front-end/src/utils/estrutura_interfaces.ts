export interface PropsAdm {
    // id: string;
    nome: string;
    nome_empresa: string;
    email: string;
    images: Array<{
        id: number;
        url: string;
    }>;
}

export interface PropsParams {
    id: string;
}

export interface IMessageProps {
    message?: string;
    code: string;
}
export interface IStatusCadastroColaborador{
    status?: number;
}

export interface IColaboradorProp{
    id: string;
    nome: string;
    email: string;
    images: Array<{
        id: number;
        url: string;
    }>;
}

export interface IIndexElement{
    index: number;
}