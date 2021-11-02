import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateAdministrador1635821278736 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "administrador",
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
                        name: "nome_empresa",
                        type: "varchar",
                    },
                    {
                        name: "email",
                        type: "varchar",
                    },
                    {
                        name: "password",
                        type: "varchar",
                    },
                    {
                        name: "token",
                        type: "varchar"
                    },
                    {
                        name: "collaborator_id",
                        type: "integer",
                    },
                    {
                        name: "tarefas_id",
                        type: "integer"
                    }
                ],
                foreignKeys: [
                    {
                        name: "collaborator",
                        columnNames: ["collaborator_id"],
                        referencedTableName: 'collaborator',
                        referencedColumnNames: ['id'],
                        onUpdate: 'CASCADE',
                        onDelete: 'CASCADE',
                    },
                    {
                        name: "tarefas",
                        columnNames: ["tarefas_id"],
                        referencedTableName: 'tarefas',
                        referencedColumnNames: ['id'],
                        onUpdate: 'CASCADE',
                        onDelete: 'CASCADE',
                    },
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("administrador")
    }

}
