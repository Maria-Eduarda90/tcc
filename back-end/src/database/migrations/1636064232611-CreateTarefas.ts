import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTarefas1636064232611 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "tarefas",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "titulo",
                        type: "varchar"
                    },
                    {
                        name: "descricao",
                        type: "text",
                    },
                    {
                        name: "propriedade_tarefa",
                        type: "decimal",
                    },
                    {
                        name: "comentario",
                        type: "text",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                    // {
                    //     name: "administrador_id",
                    //     type: "integer",
                    // },
                    // {
                    //     name: "collaborator_id",
                    //     type: "integer",
                    // }, 
                ],
                // foreignKeys: [
                //     {
                //         name: "tarefasAdministrador",
                //         columnNames: ["administrador_id"],
                //         referencedTableName: 'administrador',
                //         referencedColumnNames: ['id'],
                //         onUpdate: 'CASCADE',
                //         onDelete: 'CASCADE',
                //     },
                //     {
                //         name: "tarefasCollaborator",
                //         columnNames: ["collaborator_id"],
                //         referencedTableName: 'collaborator',
                //         referencedColumnNames: ['id'],
                //         onUpdate: 'CASCADE',
                //         onDelete: 'CASCADE',
                //     },
                // ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("tarefas")
    }

}