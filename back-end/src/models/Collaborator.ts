import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryColumn, OneToMany } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Images } from './Images';
import { Administrador } from './Administrador';
import { Tarefas } from './Tarefas'

@Entity("collaborator")
class Collaborator {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @Column()
    sobrenome: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    administrador_id: number;

    @Column()
    tarefas_id: number;

    @CreateDateColumn()
    created_at: Date;

    @OneToOne(() => Images, images => images.collaborator, {
        cascade: ['insert', 'update']
    })
    images: Images;

    @OneToOne(() => Administrador, administrador => administrador.collaborator, {
        cascade: ['insert', 'update']
    })
    administrador: Administrador;

    @OneToMany(() => Tarefas, tarefas => tarefas.collaborator, {
        cascade: ['insert', 'update']
    })
    tarefas: Tarefas;

    constructor() {
        if(!this.id){
            this.id = uuid();
        }
    }
}

export { Collaborator }