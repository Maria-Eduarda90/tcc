import Colaborador from '../models/colaborador';
import ImageView from './image_view';

export default {
    render(colaborador: Colaborador) {
        return {
            id: colaborador.id,
            nome: colaborador.nome,
            email: colaborador.email,
            isAdm: false,
            images: ImageView.renderMany(colaborador.images)
        }
    },

    renderMany(colaboradors:  Colaborador[]){
        return colaboradors.map(colaborador => this.render(colaborador));
    }
}