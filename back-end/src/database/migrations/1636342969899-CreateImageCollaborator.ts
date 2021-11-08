import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateImageCollaborator1636342969899 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "imagesCollaborator",
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
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "collaborator_id",
                        type: "integer",
                    },
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
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('imagesCollaborator')
    }

}
