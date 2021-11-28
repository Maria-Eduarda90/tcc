import { useRef, useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { FiPlus } from "react-icons/fi";
import api from '../../services/api';
import { useHistory, useParams } from 'react-router-dom';

import { RiArrowDownSLine } from 'react-icons/ri';
import { PropsParams, PropsAdm, IMessageProps } from '../../utils/estrutura_interfaces';

interface IProps {
    propsAdm?: PropsAdm;
}



export const DropdownMenu: React.FC<IProps> = ({ propsAdm }) => {
    const history = useHistory();
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const [images, setImages] = useState<File[]>([]);
    const [preview, setPreview] = useState<string[]>([]);
    const params = useParams<PropsParams>();

    function handleDropdownMenuActive() {
        setIsActive(!isActive);
    }

    const handleInputFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const selectedImages = Array.from(e.target.files);
            setImages(selectedImages);

            const selectedImagesPreview = selectedImages.map(image => {
                return URL.createObjectURL(image);
            });

            setPreview(selectedImagesPreview);
        }
    }


    async function handleSubmit(event: FormEvent) {
        event.preventDefault();
        // api.get(`/adm/${params.id}`) TODO: comentado para saber se está sendo usado
        const data = new FormData();
        images.forEach(image => {
            data.append('images', image)
        });



        api.put(`/adm/${params.id}`, data).then(response => {
            const message: IMessageProps = response.data;
            window.location.reload();
        })


    }

    return (
        <div className="menu-container">
            <div onClick={handleDropdownMenuActive} className="menu-trigger">
                <RiArrowDownSLine />
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
                                {preview.map(image => {
                                    return (
                                        <img key={image} src={image} alt="img" />
                                    )
                                })}
                                <FiPlus size={30} color="#15b6d6" />
                            </label>

                            <input onChange={handleInputFileChange} type="file" id="image" />
                            <p>Alterar foto de perfil</p>
                        </div>
                        <div className="DropdownButton">
                            <button  type="submit" onClick={handleSubmit}>Salvar</button>
                        </div>
                    </div>
                </nav>
            </form>
        </div>
    );
}