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
                    }
                ]
            })
        );
    }
    //TODO: Fazer as relações das taredas

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("administrador")
    }

}
