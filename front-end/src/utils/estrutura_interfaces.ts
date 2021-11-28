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

export interface IColaboradorProp{
    nome?: string;
    email?: string;
    images?: Array<{
        id?: number;
        url?: string;
    }>;
}