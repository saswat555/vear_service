import { MigrationInterface, QueryRunner } from "typeorm"

class UserChanged1689691811511 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "ALTER TABLE \"customer\" ADD COLUMN \"complexion\" text"
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "ALTER TABLE \"customer\" DROP COLUMN \"complexion\""
    )
  }
}

export default UserChanged1689691811511