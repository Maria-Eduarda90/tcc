import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

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

    constructor() {
        if(!this.id){
            this.id = uuid()
        }
    }
}

export { Collaborator }