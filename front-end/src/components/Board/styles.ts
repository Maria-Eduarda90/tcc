import Styled from 'styled-components';

export const ContainerBoard = Styled.div `
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;

export const Container = Styled.div `
    background: white;
    border: 1px solid var(--grey-100);
    width: 18.125rem;
    height: 19.68rem;
    border-radius: 8px;
    margin-top: 3rem;
    margin-left: 1.5rem;
    box-shadow: 0px 4px 10px rgba(200, 200, 222, 0.25);

    .title {
        margin-top: 1.5rem;
    }

    .board {
        margin-left: 1rem; 
    }

    .board h1 {
        line-height: 1.2rem;
        font-weight: 400;
        font-family: 'Lato', sans-serif;
        color: #35393B;
    }
`;