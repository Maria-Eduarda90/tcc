import Administrador from "../models/Administrador";
import imagesViews from './imagesViews';

export default {
    render(administrador: Administrador){
        return{
            id: administrador.id,
            name: administrador.name,
            nome_empresa: administrador.nome_empresa,
            email: administrador.email,
            password: administrador.password,
            token: administrador.token,
            images: imagesViews.renderMany(administrador.images)
        };
    },
    
    renderMany(administrador: Administrador[]){
        return administrador.map(administrador => this.render(administrador));
    }
};