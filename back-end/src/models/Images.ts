import { Column, Entity, PrimaryGeneratedColumn, OneToMany, JoinColumn, CreateDateColumn } from 'typeorm';
import { Administrador } from './Administrador'
import { Collaborator } from './Collaborator';

@Entity("images")
class Images {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    path: string;

    @CreateDateColumn()
    created_at: Date;

    @OneToMany(() => Administrador, administrador => administrador.images)
    administrador: Administrador;

    @OneToMany(() => Collaborator, collaborator => collaborator.images)
    collaborator: Collaborator;
}

export { Images }