import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTarefas1635821333770 implements MigrationInterface {

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
                        type: "varchar",
                    },
                    {
                        name: "descricao",
                        type: "varchar",
                    },
                    {
                        name: "propriedade_tarefa",
                        type: "varchar",
                    },
                    {
                        name: "comentario",
                        type: "varchar",
                    }
                ]
            })
        )
    }
    //TODO: Fazer as relações das taredas

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("tarefas")
    }

}
