import { Column, Entity, PrimaryGeneratedColumn, OneToMany, JoinColumn, CreateDateColumn, ManyToOne, OneToOne } from 'typeorm';
import Administrador from './Administrador'
import { Collaborator } from './Collaborator';

@Entity("imagesCollaborator")
export default class imagesCollaborator {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    path: string;

    @CreateDateColumn()
    created_at: Date;

    @OneToOne(() => Collaborator, collaborator => collaborator.images)
    @JoinColumn({ name: 'collaborator_id' })
    collaborator: Collaborator;
}