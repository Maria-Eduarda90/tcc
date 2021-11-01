//import styles
import * as Styled from "./style";
import * as AiIcons from 'react-icons/ai';
import * as FiIcons from 'react-icons/fi';
import { Link } from 'react-router-dom';

interface BodyCardInformation{
    title?: string;
    date?: Date;
    urlImg?: string;
    hasIcon?: boolean;
    iconFile?: string;
}


function CardInformation(props: BodyCardInformation){

    return(
        <Styled.Card>
            <h1>{props.title}</h1>
        </Styled.Card>
    );

}

export function Teste() {
    return (
        <Styled.Container>
            <Link to='#' className="menu-barsModal">
                <AiIcons.AiOutlineClose />
            </Link>
            <Styled.CardTarefa>
                <Styled.TituloTarefa>Fazer um orçamento</Styled.TituloTarefa>
                <Styled.DescricaoTarefa>Praesent Styled.a iaculis lorem. Duis varius varius aliquam.
                    Maecenas lacinia cursus facilisis. Aliquam egestas scelerisque sapien.
                    Praesent a iaculis lorem. Duis varius varius aliquam. Maecenas lacinia
                    cursus facilisis. Aliquam egestas scelerisque sapien.
                </Styled.DescricaoTarefa>
                <Styled.FooterTarefa>
                    <div className="flex-container">
                        <img src="https://i.pinimg.com/originals/43/17/19/431719fbf11680dda780e19cfb40b013.jpg" alt="profile" />
                        <p>Prioridade:<span>1</span></p>
                    </div>
                </Styled.FooterTarefa>
            </Styled.CardTarefa>
            <Styled.Divisor />
            <Styled.CommentBoxForm method="post" action="https://www.google.com.br">
                <h4>Adicionar comentário</h4>
                <Styled.TextArea></Styled.TextArea>
                <label htmlFor="file">
                    <p>Anexar arquivo <FiIcons.FiPaperclip /></p>
                </label>
                <input type="file" id="file" />
            </Styled.CommentBoxForm>
            <Styled.CardBoxRender>
                <CardInformation title="Minha tarefa"  />
                <CardInformation title="Nova tarefa" />
            </Styled.CardBoxRender>
        </Styled.Container>
    );
}
