import { Column, Entity, PrimaryColumn , OneToOne, JoinColumn, OneToMany, CreateDateColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';
import {Images} from './Images'
import { Collaborator } from './Collaborator';
import { Tarefas } from './Tarefas'

@Entity("administrador")
class Administrador{
    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @Column()
    nome_empresa: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    token: string;

    @CreateDateColumn()
    created_at: Date;

    // @Column()
    // collaborator_id: number;

    // @Column()
    // tarefas_id: number;

    // @OneToOne(() => Images, images => images.administrador, {
    //     cascade: ['insert', 'update']
    // })
    // images: Images;

    // @OneToMany(() => Collaborator, collaborator => collaborator.administrador, {
    //     cascade: ['insert', 'update']
    // })
    // collaborator: Collaborator[];

    // @OneToMany(() => Tarefas, tarefas => tarefas.administrador, {
    //     cascade: ['insert', 'update']
    // })
    // tarefas: Tarefas;

    constructor() {
        if(!this.id){
            this.id = uuid();
        }
    }
}

export { Administrador }