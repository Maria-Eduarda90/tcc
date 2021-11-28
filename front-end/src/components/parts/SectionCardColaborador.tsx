import { useState } from 'react';
import { useParams } from 'react-router-dom';
import DeleteImg from '../../images/delete.svg';
import { IColaboradorProp, PropsParams} from '../../utils/estrutura_interfaces';

 const  CardColaborador: React.FC = () => {
    const [colaborador, setColaborador] = useState<IColaboradorProp>();
    const params = useParams<PropsParams>();


    return (
        <div className="delete">
            <div className="image ContainerCollaborator">
                <img src="https://i.pinimg.com/originals/43/17/19/431719fbf11680dda780e19cfb40b013.jpg" alt="profile" />
                <div>
                    <p>Paulo cesar</p>
                    <p>emailaleatorio@hotmail.com</p>
                </div>
            </div>
            <div>
                <button className="buttonDelete">
                    <img src={DeleteImg} alt="DELETE" />
                </button>
            </div>
        </div>
    );
}

export default CardColaborador;