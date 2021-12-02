import styled from 'styled-components';

export const Container = styled.div `
    background: white;
    border-radius: 8px;
    box-shadow: 0px 4px 10px rgba(200, 200, 222, 0.25);
    border: 1px solid var(--grey-100);
    margin-top: 1rem;
    margin-right: 0.5rem;
    margin-left: 0.5rem;
    margin-bottom: 1rem;
    .containerCard {
        padding: 1rem;
    }
    p {
        color: var(--brown);
        font-size: 0.75rem;
        line-height: 1.125rem;
        font-family: 'Poppins', sans-serif;
    }
    p, .ImageCard {
        margin-top: 0.5rem;
    }
    h2 {
        font-size: 1rem;
        line-height: 1.2rem;
        font-weight: 700;
        font-family: 'Lato', sans-serif;
    }
    .ImageCard {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;