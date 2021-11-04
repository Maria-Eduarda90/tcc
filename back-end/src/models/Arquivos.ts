import { Column, Entity, PrimaryGeneratedColumn,OneToMany, JoinColumn  } from 'typeorm';
import { Tarefas } from './Tarefas'

@Entity("Arquivos")
class Arquivos{
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    path: string;

    @OneToMany(() => Tarefas, tarefas => tarefas.arquivos)
    @JoinColumn({name: 'tarefas_id'})
    tarefas: Tarefas;
}

export { Arquivos }