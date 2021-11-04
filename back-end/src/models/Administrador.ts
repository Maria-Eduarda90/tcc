import { Column, Entity, PrimaryColumn , OneToOne, JoinColumn, OneToMany } from 'typeorm';
import { v4 as uuid } from 'uuid';
import {Images} from './Images'
import { Collaborator } from './Collaborator';
import { Tarefas } from './Tarefas'

@Entity("Admistrador")
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

    @OneToOne(() => Images, images => images.administrador, {
        cascade: ['insert', 'update']
    })
    @JoinColumn({name: 'images_id'})
    images: Images;

    @OneToMany(() => Collaborator, collaborator => collaborator.administrador, {
        cascade: ['insert', 'update']
    })
    @JoinColumn({name: 'collaborator_id'})
    collaborator: Collaborator[];

    @OneToOne(() => Tarefas, tarefas => tarefas.administrador, {
        cascade: ['insert', 'update']
    })
    @JoinColumn({name: 'tarefa_id'})
    tarefas: Tarefas;


    constructor() {
        if(!this.id){
            this.id = uuid();
        }
    }
}

export { Administrador }