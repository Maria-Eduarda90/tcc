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

    @CreateDateColumn()
    create_at: Date;

    @OneToOne(() => Images, images => images.collaborator, {
        cascade: ['insert', 'update']
    })
    @JoinColumn({name: 'iamges_id'})
    images: Images;

    @OneToOne(() => Administrador, administrador => administrador.collaborator, {
        cascade: ['insert', 'update']
    })
    @JoinColumn({name: 'administrador_id'})
    administrador: Administrador;

    @OneToMany(() => Tarefas, tarefas => tarefas.collaborator, {
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

export { Collaborator }