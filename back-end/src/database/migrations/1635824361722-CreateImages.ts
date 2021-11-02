import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateImages1635824361722 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "images",
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
                        type: "varchar",
                    },
                    {
                        name: "collaborator_id",
                        type: "integer",
                    },
                    {
                        name: "administrador_id",
                        type: "integer"
                    }
                ],
                foreignKeys: [
                    {
                        name: "ImagesCollaborator",
                        columnNames: ["collaborator_id"],
                        referencedTableName: 'collaborator',
                        referencedColumnNames: ['id'],
                        onUpdate: 'CASCADE',
                        onDelete: 'CASCADE',
                    },
                    {
                        name: "ImagesAdmistrador",
                        columnNames: ["administrador_id"],
                        referencedTableName: 'admistrador',
                        referencedColumnNames: ['id'],
                        onUpdate: 'CASCADE',
                        onDelete: 'CASCADE',
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('images');
    }

}
