import React, { useRef, useState } from 'react';

import { RiArrowDownSLine } from 'react-icons/ri';

export const DropdownMenu = () => {
    const dropdownRef = useRef(null);
    const [ isActive, setIsActive ] = useState(false);
    
    function handleDropdownMenuActive(){
        setIsActive(!isActive);
    }

    return(
        <div className="menu-container">
            <div onClick={handleDropdownMenuActive} className="menu-trigger">
                <RiArrowDownSLine/>
            </div>
            <nav
             ref={dropdownRef}
             className={
                 `menu ${isActive ? 'active' : 'inactive'}`
                }>
                <div>
                    <div className="imageDropdown">
                        <img src="https://i.pinimg.com/originals/43/17/19/431719fbf11680dda780e19cfb40b013.jpg" alt="profile" />
                        <p>Alterar foto de perfil</p>
                    </div>
                    <div className="DropdownButton">
                        <button>Salvar</button>
                    </div>
                </div>
            </nav>
        </div>
    );
}