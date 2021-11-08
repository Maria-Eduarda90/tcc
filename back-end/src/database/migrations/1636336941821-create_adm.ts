import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createAdm1636336941821 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'adm',
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
          type: 'text',
        },
        {
          name: 'nome_empresa',
          type: 'text',
        },
        {
          name: 'email',
          type: 'text',

        },
        {
          name: 'senha',
          type: 'text',
        },
        {
          name: 'images',
          type: 'text',
        },
        {
          name: 'chave_acesso',
          type: 'text',

        },
      ],
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('adm');
  }

}
