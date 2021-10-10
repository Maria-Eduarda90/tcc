import { Container } from './styles';

export function Card() {
    return(
        <Container>
            <div className="containerCard">
                <h1>Fazer orçamento</h1>
                <p>Orçamento de veículos para uma viagem de um servidor para o interior.</p>

                <div className="image">
                    <img src="https://i.pinimg.com/originals/43/17/19/431719fbf11680dda780e19cfb40b013.jpg" alt="profile" />
                    <span>2</span>
                </div>
            </div>
        </Container>
    );
}