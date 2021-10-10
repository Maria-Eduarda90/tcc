//import styles
import { Container, CardTarefa, TituloTarefa, DescricaoTarefa, FooterTarefa, Divisor } from "./style";

export function Teste() {
    return (
        <Container>
            <CardTarefa>
                <TituloTarefa>Fazer um orçamento</TituloTarefa>
                <DescricaoTarefa>Praesent a iaculis lorem. Duis varius varius aliquam.
                    Maecenas lacinia cursus facilisis. Aliquam egestas scelerisque sapien.
                    Praesent a iaculis lorem. Duis varius varius aliquam. Maecenas lacinia
                    cursus facilisis. Aliquam egestas scelerisque sapien.
                </DescricaoTarefa>
                <FooterTarefa>
                    <div className="flex-container">
                        <img src="https://i.pinimg.com/originals/43/17/19/431719fbf11680dda780e19cfb40b013.jpg" alt="profile" />
                        <p>Prioridade:<span>1</span></p>
                    </div>
                </FooterTarefa>
            </CardTarefa>
            <Divisor/>
        </Container>
    );
}
