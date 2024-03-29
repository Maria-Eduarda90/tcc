import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createImages1636941253263 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'images',
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
          name: 'path',
          type: 'varchar'
        },
        {
          name: 'adm_id',
          type: 'integer',
          isNullable: true,
        },
        {
          name: 'colaborador_id',
          type: 'integer',
          isNullable: true,
        },
      ],
      foreignKeys: [
        {
          name: 'ImageAdm',
          columnNames: ['adm_id'],
          referencedTableName: 'adm',
          referencedColumnNames: ['id'],
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
        {
          name: 'ImageColaborador',
          columnNames: ['colaborador_id'],
          referencedTableName: 'colaborador',
          referencedColumnNames: ['id'],
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
      ],
    }));

  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('images');
  }

}
