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
        border: none;
        padding: 1rem;
        color: ${props => props.theme.colors.title};
    }

    .title fieldset {
        border-radius: 8px;
        border: 1px solid var(--grey-100);
    }

    form legend {
        color: var(--grey-brown);
        font-size: 0.75rem;
        line-height: 0.875rem;
        font-family: 'Poppins', sans-serif;
        margin-left: 1rem;
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

    .containerCheckbox input[type=number]::-webkit-inner-spin-button,
    .containerCheckbox input[type=number]::-webkit-outer-spin-button {
        -webkit-appearance: none; 
        margin: 0;
    }

    #number {
        width: 2.31rem;
        height: 1.81rem;
        margin-right: .5rem;
        border: 1px solid var(--grey-100);
        border-radius: 8px;
        outline: none;
    }

    .title {
        margin-top: 1.5rem;
    }

    .div-button {
        display: flex;
        justify-content: flex-end;
    }

    .sendTask {
        margin-top: 4rem;
        padding: 0.75rem 2.5rem;
    }
`