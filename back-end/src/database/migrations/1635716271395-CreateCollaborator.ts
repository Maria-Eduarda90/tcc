import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCollaborator1635716271395 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "collaborator",
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
                        name: "sobrenome",
                        type: "varchar",
                    },
                    {
                        name: "email",
                        type: "varchar",
                        isUnique: true,
                    },
                    {
                        name: "password",
                        type: "varchar",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                ]
            })
        )
    }
    //TODO: Fazer as relações das taredas

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("collaborator");
    }
}
