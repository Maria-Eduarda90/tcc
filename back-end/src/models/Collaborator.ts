import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity("collaborator")
class Collaborator {
    @PrimaryColumn()
    readonly id: string;
}

export { Collaborator }