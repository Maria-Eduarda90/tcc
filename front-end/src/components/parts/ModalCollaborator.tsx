import React, { useState } from 'react';
import { Container } from '../../styles/components/parts/modalCollaborator';

import * as AiIcons from 'react-icons/ai';
import * as BiIcons from 'react-icons/bs';
import { Link } from 'react-router-dom';

import DeleteImg from '../../images/delete.svg';

const ModalCollaborator: React.FC = () => {
    const [ModalCollaboratorActive, setModalCollaboratorActive] = useState(false);

    function handleActiveModalCollaborator() {
        setModalCollaboratorActive(!ModalCollaboratorActive);
    }

    return (
        <Container>
            <div className="contributors">
                <button onClick={handleActiveModalCollaborator}><span><AiIcons.AiOutlineTeam /></span> Colaboradores</button>
            </div>

            <div className={`modal-wrapper ${ModalCollaboratorActive ? 'active' : 'inactive'}`}>
                <div className="modal">
                    <div className="ContainerFlexbox">
                        <p>Colaboradores ativos</p>
                        <Link to='#' className="menu-barsModal">
                            <AiIcons.AiOutlineClose onClick={handleActiveModalCollaborator} />
                        </Link>
                    </div>

                    <div className="delete">
                        <div className="image ContainerCollaborator">
                            <img src="https://i.pinimg.com/originals/43/17/19/431719fbf11680dda780e19cfb40b013.jpg" alt="profile" />
                            <div>
                                <p>Paulo cesar</p>
                                <p>emailaleatorio@hotmail.com</p>
                            </div>
                        </div>
                        <div>
                            <img src={DeleteImg} alt="DELETE" />
                        </div>
                    </div>

                    <div className="delete">
                        <div className="image ContainerCollaborator">
                            <img src="https://i.pinimg.com/originals/43/17/19/431719fbf11680dda780e19cfb40b013.jpg" alt="profile" />
                            <div>
                                <p>Paulo cesar</p>
                                <p>emailaleatorio@hotmail.com</p>
                            </div>
                        </div>
                        <div>
                            <img src={DeleteImg} alt="DELETE" />
                        </div>
                    </div>

                    <div className="delete">
                        <div className="image ContainerCollaborator">
                            <img src="https://i.pinimg.com/originals/43/17/19/431719fbf11680dda780e19cfb40b013.jpg" alt="profile" />
                            <div>
                                <p>Paulo cesar</p>
                                <p>emailaleatorio@hotmail.com</p>
                            </div>
                        </div>
                        <div>
                            <img src={DeleteImg} alt="DELETE" />
                        </div>
                    </div>

                    <div className="delete">
                        <div className="image ContainerCollaborator">
                            <img src="https://i.pinimg.com/originals/43/17/19/431719fbf11680dda780e19cfb40b013.jpg" alt="profile" />
                            <div>
                                <p>Paulo cesar</p>
                                <p>emailaleatorio@hotmail.com</p>
                            </div>
                        </div>
                        <div>
                            <img src={DeleteImg} alt="DELETE" />
                        </div>
                    </div>

                    <div className="containerModal">
                        <h2>Cadastrar novo colaboradores</h2>
                        <form action="" method="POST">
                            <p>Nome</p>
                            <input type="text" name="text" id="text" />

                            <p>Sobrenome</p>
                            <input type="text" name="text" id="text" />

                            <p>Email</p>
                            <input type="email" name="email" id="email" />

                            <div className="arrow">
                                <h2>Enviar E-mail de confirmação para cadastro</h2>
                                <button>
                                    <BiIcons.BsArrowRight/>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default ModalCollaborator;