import styled from 'styled-components';

export const Container = styled.div`
    //TODO: margin lateral e do topo temporario, remover
    margin: 30px 30px;
    padding: 1.5rem 2.0625rem;
    width: 41.875rem;
    height: 31.125rem;
    background-color: grey;
    border-radius: 0.75rem;

`;

export const CardDescricao = styled.div`

    width: 17.75rem;
    height: 28.3125rem;
    background-color: white;


`;

export const TituloTarefa = styled.h3`

    color: var(--color-card);
    font-family: "Lato", sans-serif;
    text-align: center;
    height: 1.1875rem;
    font-size: 1rem;
    line-height: 19px;

`;

export const DescricaoTarefa = styled.p`

    width: 236px;
    height: 195px;
    text-align: left;
    color: var(--grey-90);
    margin: 1.5rem 1.5rem 0 1.5rem;
    font-family: Lato, sans-serif;
    font-size: 12px;
    line-height: 22px;

`;


export const FooterTarefa = styled.div`

    margin-top: 192px;

    
    .user .image{
        width: 2rem;
        height: 2rem;
    }

`;