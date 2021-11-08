import { Column, Entity, PrimaryGeneratedColumn, OneToMany, JoinColumn, CreateDateColumn, ManyToOne, OneToOne } from 'typeorm';
import Administrador from './Administrador'
import { Collaborator } from './Collaborator';

@Entity("images")
export default class images {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    path: string;

    @CreateDateColumn()
    created_at: Date;

    @OneToOne(() => Administrador, administrador => administrador.images)
    @JoinColumn({ name: 'administrador_id' })
    administrador: Administrador;

    // @OneToOne(() => Collaborator, collaborator => collaborator.images)
    // @JoinColumn({ name: 'collaborator_id' })
    // collaborator: Collaborator;
}