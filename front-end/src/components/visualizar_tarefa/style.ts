import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    padding: 1.5rem 2.0625rem;
    width: 43.75rem;
    height: 31.125rem;
    border-radius: 0.75rem;
    position: relative;

    .menu-barsModal{
        color: #C4C4C4;
        display: flex;
        position: absolute;
        right: 0.75rem;
        top: 0.75rem;
        width: 1.5rem;
        height: 1.5rem;
        font-size: 1.2rem;
        
    }
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
        font-family: Poppins, sans-serif;
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
    width: 0.0625rem;
    height: 28.3125rem;

    //TODO: trocar pixel por rem


`;

export const CommentBoxForm = styled.form`

    margin-top: 1.0625rem;
    margin-left: 0.4375rem;

     > h4 {

        width: 7.5625rem;
        height: 1.0625rem;
        font-family: Poppins;
        font-style: normal;
        font-weight: 500;
        font-size: 11px;
        line-height: 16px;
        color: var(--color-card);
    }

    label{
        cursor: pointer;
        display: flex;
        justify-content: flex-end;
        font-family: Poppins, sans-serif;
        font-size: 0.687rem;
        line-height: 1rem;
        // trocar para a cor grey-90
        color: white;
    }

    input[type='file'] {
        border: none;
        display: none;
    }

    
`;

export const TextArea = styled.textarea`
    width: 19.5rem;
    height: 3.187rem;
    outline: none;
    resize: none;
    padding: 1rem;
    border-radius: 0.5rem;
    /* border: 1px solid var(--grey-100); */
    border: 0.0625rem solid red;
`;

export const CardBoxRender = styled.div`
    position: absolute;
    right: 1.5rem;
    bottom: 1.5rem;
    display: flex;
    flex-direction: column;
    border-radius: 0.9rem;
    justify-content: space-between;


`;

export const H1 = styled.h1`

    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;

    color: #78808D;
`;

export const P = styled.p`

    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 8px;
    line-height: 12px;
    /* identical to box height */


    color: #78808D;

`;

export const AvatarImg = styled.img`

    display: flex;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 1rem;
    position: relative;
    left: 16.5rem;

`;


export const Card = styled.div`
    width: 19.6rem;
    height: 3.25rem;
    padding-left: 0.5rem;
    border-radius: 0.9rem;
    border: 1px solid var(--grey-100);
    display: flex;
    align-items: center;
    margin-bottom: 1rem;

`;

export const CardExt = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
`;
