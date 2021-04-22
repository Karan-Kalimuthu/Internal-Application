import {MigrationInterface, QueryRunner} from "typeorm";

export class Public1619064328122 implements MigrationInterface {
    name = 'Public1619064328122'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "department" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "department"`);
    }

}
