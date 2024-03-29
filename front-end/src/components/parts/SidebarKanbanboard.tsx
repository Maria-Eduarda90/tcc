import React, { useState, useContext } from 'react';
import Switch from 'react-switch';

import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

import { Link } from 'react-router-dom';
import { SidebarData } from '../parts/SideMenuData'
import { DropdownMenu } from '../parts/DropdownMenu';

import '../../styles/global.css';
import { ThemeContext } from 'styled-components';

import { ContainerSidebar } from '../../styles/components/sidebar';

interface Props {
    toggleTheme(): void;
}

const SidebarKanbanboard: React.FC<Props> = ({ toggleTheme }) => {
    const [sidebar, setSidebar] = useState(false);
    const { colors, title } = useContext(ThemeContext);

    function showSidebar() {
        setSidebar(!sidebar);
    }

    return (
        <div className="containerKanbanBoard">
        <div className="container-navbar ">
            <div className="header">
                <div>
                    <div className="navbar">
                        <Link to='#' className="menu-bars">
                            <FaIcons.FaBars onClick={showSidebar} />
                        </Link>
                    </div>
                    {/* verificação condicional nos permitem alternar entre mostrar e ocultar nossa barra lateral */}
                    <ContainerSidebar>
                    <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                        <ul className='nav-menu-items'>
                            <li className='navbar-toogle'>
                                <Link to='#' className="menu-bars close">
                                    <AiIcons.AiOutlineClose onClick={showSidebar} />
                                </Link>
                            </li>
                            {/* usando a função map para mapear e criar os elememtos da barra lateral usando os dados em SideBarData.tsx*/}
                            {SidebarData.map((item, index) => {
                                return (
                                    <li key={index} className={item.cName}>
                                        <div>
                                            {item.icon}
                                            <span>{item.title}</span>
                                            <Switch 
                                                onChange={toggleTheme}
                                                checked={title === 'dark'}
                                                checkedIcon={false}
                                                uncheckedIcon={false}
                                            />
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </nav>
                    </ContainerSidebar>
                </div>
                <div className="profile">
                    <div className="image">
                        <img src="https://i.pinimg.com/originals/43/17/19/431719fbf11680dda780e19cfb40b013.jpg" alt="Profile" />
                    </div>
                    <div className="profileName">
                        <p>Samilly Borges</p>
                    </div>
                    <div>
                        <DropdownMenu />
                    </div>
                </div>
            </div>
        </div>

        </div>
    );
}

export default SidebarKanbanboard;