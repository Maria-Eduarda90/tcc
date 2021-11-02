import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateArquivo1635825205198 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "arquivos",
                columns: [
                    {
                        name: "id",
                        type: "integer",
                        unsigned: true,
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment'
                    },
                    {
                        name: "path",
                        type: "varchar"
                    },
                    {
                        name: "tarefas_id",
                        type: "integer"
                    }
                ],
                foreignKeys: [
                    {
                        name: "AquivosTarefa",
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
        await queryRunner.dropTable("arquivos");
    }

}
