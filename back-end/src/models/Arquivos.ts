import { Column, Entity, PrimaryGeneratedColumn,OneToMany, JoinColumn, CreateDateColumn  } from 'typeorm';
import { Tarefas } from './Tarefas'

@Entity("arquivos")
class Arquivos{
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    path: string;

    @CreateDateColumn()
    created_at: Date;

    @OneToMany(() => Tarefas, tarefas => tarefas.arquivos)
    tarefas: Tarefas;
}

export { Arquivos }