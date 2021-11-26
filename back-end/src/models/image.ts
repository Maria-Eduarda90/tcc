import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import Adm from './adm';
import Colaborador from './colaborador';

@Entity('images')
export default class Image {

	@PrimaryGeneratedColumn('increment')
	id: number;

	@Column()
	path: string;

    @ManyToOne (() => Adm, adm => adm.images)
    @JoinColumn({name: 'adm_id'})
    adm: Adm;

	@ManyToOne (() => Colaborador, colaborador => colaborador.images)
    @JoinColumn({name: 'colaborador_id'})
    colaborador: Colaborador;

}