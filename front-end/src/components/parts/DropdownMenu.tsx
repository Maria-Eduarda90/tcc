import { useRef, useState, ChangeEvent, FormEvent } from 'react';
import { FiPlus } from "react-icons/fi";
import api from '../../services/api';
import { useHistory, useParams } from 'react-router-dom';

import { RiArrowDownSLine } from 'react-icons/ri';
import { PropsAdmParams } from '../../utils/structAdm';

export const DropdownMenu = () => {
    const history = useHistory();
    const dropdownRef = useRef(null);
    const [ isActive, setIsActive ] = useState(false);
    const [ images, setImages ] = useState<File[]>([]);
    const params = useParams<PropsAdmParams>();
    
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
        images.forEach(image => {
            data.append('images', image)
        });


        api.put(`/adm/${params.id}`, data).then(response => {
            console.log(response);
        })

      }

    return(
        <div className="menu-container">
            <div onClick={handleDropdownMenuActive} className="menu-trigger">
                <RiArrowDownSLine/>
            </div>
            <form >
                <nav
                ref={dropdownRef}
                className={
                    `menu ${isActive ? 'active' : 'inactive'}`
                    }>
                    <div>
                        <div className="imageDropdown">
                            <label htmlFor="image" className="new-image">
                                <img key={images.id} src={images[0]}/>
                                <FiPlus size={30} color="#15b6d6" />
                            </label>
                            
                            <input onChange={handleInputFileChange} type="file" id="image" />
                            <p>Alterar foto de perfil</p>
                        </div>
                        <div className="DropdownButton">
                            <button type="submit" onClick={handleSubmit}>Salvar</button>
                        </div>
                    </div>
                </nav>
            </form>
        </div>
    );
}