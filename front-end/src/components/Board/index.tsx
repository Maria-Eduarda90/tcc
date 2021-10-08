import { Container } from './styles';
import { Card } from '../Card';

export function Board() {
    return(
        <Container>
            <div className="board">
                <h1>Recebidos</h1>
                <div>
                    <Card/>
                </div>
            </div>
        </Container>
    );
}