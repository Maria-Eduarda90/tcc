import React, { useRef, useState } from 'react';
import { FiPlus } from "react-icons/fi";

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
            <form action="" method="POST">
                <nav
                ref={dropdownRef}
                className={
                    `menu ${isActive ? 'active' : 'inactive'}`
                    }>
                    <div>
                        <div className="imageDropdown">
                            <label htmlFor="image[]" className="new-image">
                                <FiPlus size={30} color="#15b6d6" />
                            </label>
                            <input multiple type="file" id="image[]" />
                            <p>Alterar foto de perfil</p>
                        </div>
                        <div className="DropdownButton">
                            <button>Salvar</button>
                        </div>
                    </div>
                </nav>
            </form>
        </div>
    );
}