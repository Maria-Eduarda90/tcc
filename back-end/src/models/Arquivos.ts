import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, CreateDateColumn  } from 'typeorm';
import { Tarefas } from './Tarefas'

@Entity("arquivos")
class Arquivos{
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    path: string;

    @CreateDateColumn()
    created_at: Date;

    @OneToOne(() => Tarefas, tarefas => tarefas.arquivos)
    tarefas: Tarefas;
}

export { Arquivos }