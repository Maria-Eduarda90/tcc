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
        overflow-y: auto;
    }

    .modal {
        background: ${props => props.theme.colors.primary};
        border-radius: 8px;
        width: min(35rem, 90%);
        margin: auto;

        padding: 1.5rem 2.12rem;
        overflow-y: initial !important;
    }

    .menu-barsModal {
        color: var(--grey-90);
    }

    .ContainerFlexbox, .delete{
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

    .containerModal {
        margin-top: 2.56rem;
        background: var(--blue-dark);
        border-radius: 8px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        padding-top: 0.625rem;
        padding-bottom: 0.812rem;
        padding-left: 0.875rem;
    }

    .containerModal p, h2 {
        margin-top: 0.562rem;
        color: white;
        font-family: 'Poppins', sans-serif;
        font-size: 0.75rem;
        line-height: 1.12rem;
    }

    .containerModal h2 {
        font-weight: 400;
        color: var(--collaborator);
    }

    .containerModal form p {
        font-size: 0.875rem;
        line-height: 1.31rem;
    }

    .containerModal form input {
        width: 24.18rem;
        height: 2.12rem;
        border-radius: 10px;
        border: none;
    }

    .arrow {
        display: flex;
        justify-content: flex-end;
        margin-right: -2rem;
        margin-top: 0.687rem;
    }

    .arrow h2 {
        margin-right: 1rem;
    }

    .arrow button {
        margin-top: 0.1rem;
        display: flex;
        align-items: center;
        font-size: 1.5rem;
    }
`;