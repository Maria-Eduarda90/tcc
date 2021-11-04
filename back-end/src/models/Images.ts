import { Column, Entity, PrimaryGeneratedColumn, OneToMany, JoinColumn  } from 'typeorm';
import { Administrador } from './Administrador'
import { Collaborator } from './Collaborator';

@Entity("images")
class Images {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    path: string;

    @OneToMany(() => Administrador, administrador => administrador.images)
    @JoinColumn({name: 'administrador_id'})
    administrador: Administrador;

    @OneToMany(() => Collaborator, collaborator => collaborator.images)
    @JoinColumn({name: 'collaborator_id'})
    collaborator: Collaborator;
}

export { Images }