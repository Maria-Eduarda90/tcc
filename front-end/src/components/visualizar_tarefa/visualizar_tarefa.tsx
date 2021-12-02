//import styles
import * as Styled from "./style";
import * as AiIcons from 'react-icons/ai';
import * as FiIcons from 'react-icons/fi';
import { Link } from 'react-router-dom';

interface BodyCardInformation {
    title?: string;
    date?: string;
    urlImg?: string;
    hasIcon?: boolean;

}

interface IIcon {
    icon?: string;
}
interface IAvatarImage {
    url?: string;
}


function CardInformation(props: BodyCardInformation): JSX.Element {

    return (
        <Styled.Card>
            <Styled.CardExt>
                <Styled.H1>{props.title}</Styled.H1>
                <Styled.P>{props.date}</Styled.P>
            </Styled.CardExt>
            {props.hasIcon ? <Icon /> : <AvatarImg url='https://i2.wp.com/www.cssscript.com/wp-content/uploads/2020/12/Customizable-SVG-Avatar-Generator-In-JavaScript-Avataaars.js.png?fit=438%2C408&ssl=1' />}
        </Styled.Card>

    );

}

function AvatarImg(props: IAvatarImage): JSX.Element {

    return (
        <Styled.AvatarImg src={props.url} alt='Avatar' />
    );

}

function Icon(props: IIcon): JSX.Element {

    return (
        <Styled.Card>
            <Styled.H1></Styled.H1>
            <Styled.P></Styled.P>
        </Styled.Card>
    );

}


export function CardExpandido() {
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
                <CardInformation title="arquivo adcionado..." date='2018-04-01 16:00:00' />
                <CardInformation title="bloqueia a tarefa" date='2018-04-01 16:00:00' />
            </Styled.CardBoxRender>
        </Styled.Container>
    );
}
