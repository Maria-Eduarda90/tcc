import React, { useRef, useState, ChangeEvent } from 'react';
import { FiPlus } from "react-icons/fi";

import { RiArrowDownSLine } from 'react-icons/ri';

export const DropdownMenu = () => {
    const dropdownRef = useRef(null);
    const [ isActive, setIsActive ] = useState(false);
    const [ images, setImages ] = useState("");
    
    function handleDropdownMenuActive(){
        setIsActive(!isActive);
    }

    const handleInputFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.files && e.target.files.length > 0){
            setImages(URL.createObjectURL(e.target.files[0]));
        }
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
                            <label htmlFor="image" className="new-image">
                                <img src={images}/>
                                <FiPlus size={30} color="#15b6d6" />
                            </label>
                            
                            <input onChange={handleInputFileChange} type="file" id="image" />
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