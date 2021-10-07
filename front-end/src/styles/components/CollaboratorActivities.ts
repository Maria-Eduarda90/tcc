import styled from 'styled-components';

export const ContainerUserTask = styled.div `
.ContainerUserTask {
    margin-top: 3.37rem;
    margin-right: 3rem;
    margin-left: 3rem;
}

.cadDescriptionUser {
    box-shadow: 0px 0.25rem 0.625rem rgba(17, 76, 116, 0.1);
    border-radius: 0.5rem;
}

.descriptionUser {
    margin-right: 9rem;
    margin-left: 1rem;
}

.titleMargin h1 {
    color: white;
}

.titleActivities {
    background: var(--blue-dark);
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-right: 7rem;
    padding-left: 1rem;
}

.titleMargin, .descriptionUser, .user, .TasksComment {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.descriptionUser {
    margin-top: 1rem;
}
.descriptionUser p{
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 0.75rem;
    line-height: 1.125rem;
}

.space {
    margin-right: 5.5rem;
}

.message {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 2rem;
}

.message span, img {
    margin-right: 0.5rem;
}

.message img {
    width: 1rem;
    height: 1rem;
}
`