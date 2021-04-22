import {MigrationInterface, QueryRunner} from "typeorm";

export class Public1619070415390 implements MigrationInterface {
    name = 'Public1619070415390'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "public" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_097fabc7660440c2cf9a1879999" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
       // await queryRunner.query(`DROP TABLE "public"`);
    }

}
