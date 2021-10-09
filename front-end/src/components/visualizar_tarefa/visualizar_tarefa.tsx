//import styles
import { Container, CardDescricao, TituloTarefa, DescricaoTarefa, FooterTarefa } from "./style";

export function Teste() {
    return (
        <Container>
            <CardDescricao>
                <TituloTarefa>Fazer um orçamento</TituloTarefa>
                <DescricaoTarefa>Praesent a iaculis lorem. Duis varius varius aliquam.
                    Maecenas lacinia cursus facilisis. Aliquam egestas scelerisque sapien.
                    Praesent a iaculis lorem. Duis varius varius aliquam. Maecenas lacinia
                    cursus facilisis. Aliquam egestas scelerisque sapien.</DescricaoTarefa>
                <FooterTarefa>
                    <div className="user">
                        <div className="image">
                            <img src="https://i.pinimg.com/originals/43/17/19/431719fbf11680dda780e19cfb40b013.jpg" alt="profile" />
                        </div>
                    </div>
                </FooterTarefa>
            </CardDescricao>
        </Container>
    );
}
