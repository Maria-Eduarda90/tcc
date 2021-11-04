import { Column, Entity, PrimaryColumn, OneToOne, JoinColumn, ManyToOne  } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Arquivos } from './Arquivos'
import { Collaborator } from './Collaborator'
import { Administrador } from './Administrador'

@Entity("tarefas")
class Tarefas {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    titulo: string;

    @Column()
    descricao: string;

    @Column()
    propriedade_tarefa: string;
    
    @Column()
    comentario: string;

    @OneToOne(() => Arquivos, arquivos => arquivos.tarefas, {
        cascade: ['insert', 'update']
    })
    arquivos: Arquivos;

    @ManyToOne(() => Collaborator, collaborator => collaborator.tarefas, {
        cascade: ['insert', 'update']
    })
    collaborator: Collaborator;

    @OneToOne(() => Administrador, administrador => administrador.tarefas, {
        cascade: ['insert', 'update']
    })
    administrador: Administrador;

    constructor() {
        if(!this.id){
            this.id == uuid();
        }
    }
}

export { Tarefas }