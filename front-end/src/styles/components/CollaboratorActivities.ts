import styled from 'styled-components';

export const ContainerUserTask = styled.div `
.ContainerUserTask {
    margin-top: 3.37rem;
    margin-right: 3rem;
    margin-left: 3rem;
}
    
.CardDescriptionCollaborator {
    box-shadow: 0px 4px 10px rgba(17, 76, 116, 0.1);
    border-radius: 0.5rem;
    /* background: ${props => props.theme.colors.secundary}; */
}

.CardDescriptionCollaborator p, th, td {
    font-family: 'Poppins', sans-serif;
    color: ${props => props.theme.colors.text};
}

table img {
    width: 3rem;
    height: 3rem;
    border-radius: 2rem;
}
`