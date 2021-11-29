import React, { useState, useContext, useEffect } from 'react';
import Switch from 'react-switch';

import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

import { Link } from 'react-router-dom';
import { SidebarData } from './parts/SideMenuData'
import { DropdownMenu } from './parts/DropdownMenu';
import ModalCollaborator from '../components/parts/ModalCollaborator';

import '../styles/components/sidebar.css';
import { ThemeContext } from 'styled-components';

import { ContainerSidebar } from '../styles/components/sidebar';
import { IColaboradorProp, PropsAdm } from '../utils/estrutura_interfaces';


interface Props {
    toggleTheme(): void;
    propsAdm?: PropsAdm;
    propsColaborador?: Array<IColaboradorProp>;

}


const Sidebar: React.FC<Props> = ({ toggleTheme, propsAdm, propsColaborador }) => {

    const [sidebar, setSidebar] = useState(false);
    const { colors, title } = useContext(ThemeContext);




    function showSidebar() {
        setSidebar(!sidebar);
    }

    return (
        <div className="container-navbar">
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

                                <ModalCollaborator/>
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
                    <img src={propsAdm?.images[0]?.url??"https://styles.redditmedia.com/t5_3saob8/styles/communityIcon_nbdzwdzb9md61.png"} alt="Profile" />
                    </div>
                    <div className="profileName">
                        <p>{propsAdm?.nome ?? "None"}</p>
                    </div>
                    <div>
                        <DropdownMenu propsAdm={propsAdm}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;