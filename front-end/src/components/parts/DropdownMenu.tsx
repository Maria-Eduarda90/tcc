import { useRef, useState, ChangeEvent, FormEvent } from 'react';
import { FiPlus } from "react-icons/fi";
import api from '../../services/api';
import { useHistory } from 'react-router-dom';

import { RiArrowDownSLine } from 'react-icons/ri';

export const DropdownMenu = () => {
    const history = useHistory();
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

    async function handleSubmit(event: FormEvent){
        event.preventDefault();
    
        const data = new FormData();
    
        data.append('images', images)
        console.log(images)
    
        await api.post('administrador', data);
    
        history.push('/dashboard');
      }

    return(
        <div className="menu-container">
            <div onClick={handleDropdownMenuActive} className="menu-trigger">
                <RiArrowDownSLine/>
            </div>
            <form onSubmit={handleSubmit}>
                <nav
                ref={dropdownRef}
                className={
                    `menu ${isActive ? 'active' : 'inactive'}`
                    }>
                    <div>
                        <div className="imageDropdown">
                            <label htmlFor="image" className="new-image">
                                <img key={images} src={images}/>
                                <FiPlus size={30} color="#15b6d6" />
                            </label>
                            
                            <input onChange={handleInputFileChange} type="file" id="image" />
                            <p>Alterar foto de perfil</p>
                        </div>
                        <div className="DropdownButton">
                            <button type="submit">Salvar</button>
                        </div>
                    </div>
                </nav>
            </form>
        </div>
    );
}