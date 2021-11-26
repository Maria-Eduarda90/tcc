import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createColaborador1637725196671 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'colaborador',
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
                name: 'nome',
                type: 'varchar',
              },
              {
                name: 'email',
                type: 'varchar',
      
              },
              {
                name: 'senha',
                type: 'varchar',
              },
              {
                name: 'isAdm',
                type: 'boolean',
                default: false,
                isNullable: true,
              },
              {
                name: 'adm_id',
                type: 'integer',
                isNullable: true,
              },
            ],
            foreignKeys: [
                {
                  name: 'ColaboradorAdm',
                  columnNames: ['adm_id'],
                  referencedTableName: 'adm',
                  referencedColumnNames: ['id'],
                  onUpdate: 'CASCADE',
                  onDelete: 'CASCADE',
                },
              ],
          }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('colaborador');
    }

}
