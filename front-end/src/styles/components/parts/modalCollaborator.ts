import styled from 'styled-components';

export const Container =  styled.div `
    .contributors button{
        border: none;
        background: none;
        margin-top: 2rem;
        margin-bottom: 2rem;
        margin-left: 1rem;
        color: var(--grey-brown);
        font-size: 1.1rem;
    }

    .contributors span {
        margin-left: 0.5rem;
    }

    .modal-wrapper {
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        display: flex;

        background: rgba(4, 9, 17, .8);
        visibility: hidden;
        opacity: 0;
        z-index: 1000;
    }

    .modal {
        background: ${props => props.theme.colors.primary};
        border-radius: 8px;
        width: min(35rem, 90%);
        margin: auto;

        padding: 1.5rem 2.12rem;
    }

    .ContainerFlexbox, .delete {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .ContainerFlexbox p {
        font-family: 'Poppins', sans-serif;
        font-size: 1rem;
        line-height: 1.5rem;
    }

    .delete {
        border-top: 1px solid var(--grey-ccc);
        border-bottom: 1px solid var(--grey-ccc);
    }

    .delete p {
        font-family: 'Mukta', sans-serif;
        font-weight: 700;
        font-size: 1rem;
        line-height: 1.62rem;
    }

    .ContainerCollaborator {
        display: flex;
        align-items: center;
        margin-top: 1.43rem;
        margin-bottom: 1.43rem;
    }

    .modal-wrapper.active {
        visibility: visible;
        opacity: 1;
    }
`;