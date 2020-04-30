import { MigrationInterface, QueryRunner } from 'typeorm';

export default class DataSet1588218196928 implements MigrationInterface {
  name = 'DataSet1588218196928';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE `data` (`id` bigint NOT NULL AUTO_INCREMENT, `acc1` float NOT NULL, `acc2` float NOT NULL, `acc3` float NOT NULL, `gyro1` float NOT NULL, `gyro2` float NOT NULL, `gyro3` float NOT NULL, `countSteps` int NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB',
      undefined,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE `data`', undefined);
  }
}
