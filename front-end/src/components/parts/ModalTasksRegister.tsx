import React, { useState } from 'react';
import { Container } from '../../styles/components/parts/ModalTasksRegister';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';

export const ModalTasksRegister = () => {
    const [ modalIsOpen, setIsOpen ] = useState(false);

    function openModal(){
        setIsOpen(!modalIsOpen);
    }

    return(
        <Container>
        <div className="containerModal">
            
            <div className="ContainerDivButton">
                <button className="enter"  onClick={openModal}>Nova Tarefa</button>
                <button className="LinkButton filter">Filtrar</button>
            </div>
            
            <div className={
                 `modal-wrapper ${modalIsOpen ? 'active' : 'inactive'}`
                }>
            <div className="modal">
                <div className="CreateTasks">
                    <h1>Criar tarefa</h1>
                    <div>
                        <Link to='#' className="menu-barsModal">
                            <AiIcons.AiOutlineClose onClick={openModal} />
                        </Link>
                    </div>
                </div>
                <form action="" method="POST">
                    <div className="title">
                        <fieldset>
                            <legend>Titulo da tarefa</legend>
                            <input type="text" id="description" required/>
                        </fieldset>
                    </div>

                    <div className="title">
                        <fieldset>
                            <legend>Descrição completa da tarefa</legend>
                            <textarea name="description" id="description" required></textarea>
                        </fieldset>
                    </div>

                    <div className="ContainerDescription">
                        <div className="ContainerDescriptionImage title">
                            <div  className="image">
                                <img src="https://i.pinimg.com/originals/43/17/19/431719fbf11680dda780e19cfb40b013.jpg" alt="profile" />
                            </div>
                            <div className="searchResponsible">
                                <fieldset>
                                    <legend>Responsavel da tarefa</legend>
                                    <input type="search" name="search" id="description" required />
                                </fieldset>
                            </div>
                        </div>
                        <div className="containerCheckbox">
                            <input type="number" name="number" id="number" required/>
                            <h1>Prioridade</h1>
                        </div>
                    </div>

                    <div className="div-button">
                        <button className="enter sendTask">
                            Enviar Tarefa
                        </button>
                    </div>
                </form>
            </div>
            </div>
            
        </div>
        </Container>
    );
}