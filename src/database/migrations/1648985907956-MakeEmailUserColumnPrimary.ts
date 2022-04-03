import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class MakeEmailUserColumnPrimary1648985907956
    implements MigrationInterface
{
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.changeColumn(
            "users",
            "email",
            new TableColumn({
                name: "email",
                type: "varchar",
                isUnique: true,
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.changeColumn(
            "users",
            "email",
            new TableColumn({
                name: "email",
                type: "varchar",
                isUnique: false,
            })
        );
    }
}
