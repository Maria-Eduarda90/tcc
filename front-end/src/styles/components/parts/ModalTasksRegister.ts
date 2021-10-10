import styled from 'styled-components';

export const Container = styled.div `
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
    }

    .modal {
        background: ${props => props.theme.colors.primary};
        border-radius: 8px;
        width: min(55rem, 90%);
        margin: auto;

        padding: 1.5rem 3rem;
    }

    .modal-wrapper.active {
        visibility: visible;
        opacity: 1;
    }

    .modal h1 {
        color: ${props => props.theme.colors.title};
    }

    #description {
        resize: none;
        background: transparent;

        width: 100%;
        outline: none;
        border-radius: 8px;
        border: 1px solid var(--grey-100);
        padding: 1rem;
        color: ${props => props.theme.colors.title};
    }

    form p {
        color: var(--grey-brown);
        font-size: 0.75rem;
        line-height: 0.875rem;
        font-family: 'Poppins', sans-serif;
    }
    
    textarea {
        height: 10rem;
    }

    .menu-barsModal {
        color: var(--grey-brown);
        font-size: 1.5rem;
    }

    .ContainerDescription, .CreateTasks {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .ContainerDescriptionImage, .containerCheckbox {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .ContainerDescriptionImage img {
        margin-top: .7rem;
    }

    #radio {
        width: 1.2rem;
        height: 1.2rem;
        margin-right: .5rem;
    }

    .title {
        margin-top: 1.5rem;
    }

    .sendTask {
        margin-top: 4rem;
        padding: 0.75rem 2.5rem;
    }
`