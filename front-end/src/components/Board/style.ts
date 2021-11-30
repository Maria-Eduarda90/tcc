import Styled from 'styled-components';

export const ContainerBoard = Styled.div `
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;
export const Container = Styled.div `
    height: max-content;
    min-height: 6.25rem;
    /* width: 18.125rem; */
    box-shadow: 1px 1px 6px rgba(0,0,0,0.5);
    height: 19.68rem;
    border-radius: 8px;
    margin-top: 3rem;
    margin-left: 2rem;
    margin-right: 2rem;
    .title {
        margin-top: 1.5rem;
    }
    .board {
        margin-left: 1.5rem;
        margin-left: 1rem; 
        margin-bottom: 1.5rem;
        margin-top: 1rem; 
    }
    .board h1 {
        font-size: 1rem;
        line-height: 1.2rem;
        font-weight: 400;
        font-family: 'Lato', sans-serif;
        margin-bottom: 1.5rem;
    }`