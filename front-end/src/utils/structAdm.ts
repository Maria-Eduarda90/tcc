export interface PropsAdm {
    // id: string;
    nome: string;
    nome_empresa: string;
    email: string;
    images: Array<{
        url: string;
    }>;
}

export interface PropsAdmParams {
    id: string;
}