import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn, ManyToOne } from 'typeorm';
import Adm from './adm';
import Image from './image';


@Entity('colaborador')
export default class Colaborador {

	@PrimaryGeneratedColumn('increment')
	id: number;

	@Column()
	nome: string;

	@Column()
	email: string;

	@Column()
	senha: string;

	@Column()
	isAdm: boolean;
	
	@Column()
	adm_id: number;

	@OneToMany(() => Image, image => image.colaborador, {
		cascade: ['insert', 'update']
	})
	@JoinColumn({ name: 'colaborador_id' })
	images: Image[];
}