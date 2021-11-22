export interface PropsAdm {
    id: string;
    nome: string;
    nome_empresa: string;
    email: string;
    images: Array<{
        path: string;
    }>;
}

export interface PropsAdmParams {
    id: string;
}