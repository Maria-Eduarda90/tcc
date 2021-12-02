import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createTarefa1638412882674 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'tarefa',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment'
                },
                {
                    name: 'titulo',
                    type: 'varchar',
                },
                {
                    name: 'descricao',
                    type: 'varchar',
                },
                {
                    name: "prioridade",
                    type: 'number',
                },
                {
                    name: 'tempo_existencia',
                    type: 'datetime',
                },
                {
                    name: 'tempo_existencia',
                    type: 'datetime',
                },
                {
                    name: 'cometario',
                    type: 'varchar',
                },
            ],
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('tarefa')
    }

}
