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

export interface PropsAdmParams {
    id: string;
}

export interface IMessageProps {
    message?: string;
    code: string;
}