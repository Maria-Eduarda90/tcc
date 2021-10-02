import styled from 'styled-components';

export const ContainerUserTask = styled.div `
    .ContainerUserTask {
    margin-top: 3.37rem;
    margin-right: 3rem;
    margin-left: 3rem;
}

.UserTaks {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}

.Task {
    border: 1px solid var(--grey-100);
    width: 15.5rem;
    height: 7.81rem;
    padding-top: 24px;
    padding-left: 20px;
    overflow: hidden;
    border-radius: 8px;
    /* background: ${props => props.theme.colors.secundary}; */
}

.Task p {
    font-family: 'Inter', sans-serif;
    font-size: 0.875rem;
}

.Task h1, .Task p {
    font-weight: 500;
    color: var(--grey-brown);
}

.Task h1 {
    font-size: 3rem;
    line-height: 3.62rem;
}

.Distributed {
    border-left: 3px solid var(--green);
}

.blocked {
    border-left: 3px solid var(--dark-green);
}

.InProgress {
    border-left: 3px solid var(--orange);
}

.Finished {
    border-left: 3px solid var(--violet);
}

.CommentsAdded {
    border-left: 3px solid var(--green-water);
}
`