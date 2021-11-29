import { useEffect, useState } from 'react';
import DeleteImg from '../../images/delete.svg';
import api from '../../services/api';
import { IColaboradorProp, IStatusCadastroColaborador } from '../../utils/estrutura_interfaces';


const CardColaborador: React.FC<IStatusCadastroColaborador> = ({ status }) => {
    const [colaborador, setColaborador] = useState<IColaboradorProp[]>([]);

    const handleSubmitDel = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const id = Number(event.view.document.activeElement?.id);
        if (id) {
            api.delete(`/colaborador/${id}`);
        }
    }

    useEffect(() => {
        api.get(`/colaborador`).then(response => {
            setColaborador(response.data);
        });
    }, [status === 201 || handleSubmitDel]);

    

    return (
        <>
            {colaborador?.map(colaborad => {
                return (
                    <div className="delete">
                        <div className="image ContainerCollaborator">
                            <img src={colaborad?.images[0]?.url ?? "https://styles.redditmedia.com/t5_3saob8/styles/communityIcon_nbdzwdzb9md61.png"} alt="Profile" />
                            <div>
                                <p>{colaborad?.nome ?? 'zé'}</p>
                                <p>{colaborad?.email ?? 'emailaleatorio@hotmail.com'}</p>
                            </div>
                        </div>
                        <div>
                            <button className="buttonDelete" id={colaborad.id} onClick={handleSubmitDel}>
                                <img src={DeleteImg} alt={colaborad.id} />
                            </button>
                        </div>
                    </div>
                )
            })}
        </>
    );
}

export default CardColaborador;

