import DeleteImg from '../../images/delete.svg';

 const  CardColaborador: React.FC = () => {
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