import styled from 'styled-components';

export const ContainerSidebar = styled.div `

.nav-menu  {
    background: ${props => props.theme.colors.primary};
    width: 15.62rem;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: -100%;
    transition: 850ms;
    z-index: 1000;
}

/* menu ativo */
.nav-menu.active {
    left: 0;
    transition: 350ms;
}

.close {
    color: var(--brown);
}

.nav-text {
    padding-top: 1rem;
    list-style: none;
    height: 4.25rem;
}

.nav-text div {
    text-decoration: none;
    color: var(--grey-brown);
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    padding: 0 .5rem 0 1rem;
}

.nav-text span:hover {
    color: var(--blue-dark);
    cursor: pointer;
}

.nav-menu-items {
    margin-top: 2rem;
    width: 100%;
}

span {
    margin-left: 1rem;
}
`;