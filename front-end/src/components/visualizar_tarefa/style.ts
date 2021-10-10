import styled from 'styled-components';

export const Container = styled.div`
    //TODO: margin lateral e do topo temporario, remover
    margin: 30px 30px;
    display: flex;
    padding: 1.5rem 2.0625rem;
    width: 43.75rem;
    height: 31.125rem;
    background-color: grey;
    border-radius: 0.75rem;

`;

export const CardTarefa = styled.div`

    position: relative;
    width: 17.75rem;
    height: 28.3125rem;
    background-color: white;
    margin-right: 2rem;



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

    /* margin-top: 10rem; */
    position: absolute;
    bottom: .3125rem;
    margin-left: 0.375rem;
    width: 17.75rem;
    
    .flex-container {
        display: flex;
        align-items: center;
    }

    .flex-container p{
        font-family: Poppins;
        font-weight: 500;
        font-size: 14px;
        line-height: 21px;
        color: var(--grey-90);
        span{
            margin-left: .75rem;
        }
    }
    
    img{
        width: 2rem;
        height: 2rem;
        border-radius: 1rem;
        margin: 0;
        margin-right: 9.125rem;
    }

`;

export const Divisor = styled.hr`

    color: #C4C4C4;
    width: 1px;
    height: 453px;

    //TODO: trocar pixel por rem


`;