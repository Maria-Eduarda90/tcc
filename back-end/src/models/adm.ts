import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity('adm')
export default class Adm {

	@PrimaryGeneratedColumn('increment')
	id: number;

	@Column()
	nome: string;

	@Column()
	nome_empresa: string;

	@Column()
	email: string;

	@Column()
	senha: string;

	@Column()
	images: string;

	@Column()
	chave_acesso: string;
}