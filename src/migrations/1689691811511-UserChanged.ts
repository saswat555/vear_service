import { MigrationInterface, QueryRunner } from "typeorm";

//add column comlexion, height and weight
class UserChanged1689691811511 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "ALTER TABLE \"customer\" ADD \"complexion\" character varying, ADD \"height\" character varying, ADD \"weight\" character varying"    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "ALTER TABLE \"customer\" DROP COLUMN \"complexion\", DROP COLUMN \"height\", DROP COLUMN \"weight\""    );
  }
}

export default UserChanged1689691811511;
