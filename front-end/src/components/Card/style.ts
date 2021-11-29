import styled from 'styled-components';

export const Container = styled.div `
background: white;
    margin-right: 1rem;
    border-radius: 8px;
    box-shadow: 0px 4px 10px rgba(200, 200, 222, 0.25);
    border: 1px solid var(--grey-100);
    cursor: move;
    .containerCard {
        padding: 1rem;
    }
    .containerCard p {
        color: var(--brown);
        font-size: 0.75rem;
        line-height: 1.125rem;
        font-family: 'Poppins', sans-serif;
    }
    .containerCard p, .ImageCard {
        margin-top: 0.5rem;
    }
    .ImageCard {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;