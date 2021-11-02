import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCollaborator1635716271395 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "collaborator",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "name",
                        type: "varchar"
                    },
                    {
                        name: "sobrenome",
                        type: "varchar",
                    },
                    {
                        name: "email",
                        type: "varchar",
                        isUnique: true,
                    },
                    {
                        name: "password",
                        type: "varchar",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "tarefas_id",
                        type: "integer"
                    },
                    {
                        name: "administrador_id",
                        type: "integer"
                    }
                ],
                foreignKeys: [
                    {
                        name: "Admistrador",
                        columnNames: ["administrador_id"],
                        referencedTableName: 'admistrador',
                        referencedColumnNames: ['id'],
                        onUpdate: 'CASCADE',
                        onDelete: 'CASCADE',
                    },
                    {
                        name: "Tarefa",
                        columnNames: ["tarefas_id"],
                        referencedTableName: 'tarefas',
                        referencedColumnNames: ['id'],
                        onUpdate: 'CASCADE',
                        onDelete: 'CASCADE',
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("collaborator");
    }
}
