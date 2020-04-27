import {MigrationInterface, QueryRunner} from "typeorm";

export class Inicial1588018041654 implements MigrationInterface {
    name = 'Inicial1588018041654'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `data` (`id` bigint NOT NULL AUTO_INCREMENT, `acc1` float NOT NULL, `acc2` float NOT NULL, `acc3` float NOT NULL, `gyro1` float NOT NULL, `gyro2` float NOT NULL, `gyro3` float NOT NULL, `countSteps` int NOT NULL, `date` datetime NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `data`", undefined);
    }

}
