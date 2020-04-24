import { MigrationInterface, QueryRunner, Table } from 'typeorm';

class DataMigration1587763559394 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'data',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'acc1',
            type: 'float',
            isNullable: false,
          },
          {
            name: 'acc2',
            type: 'float',
            isNullable: false,
          },
          {
            name: 'acc3',
            type: 'float',
            isNullable: false,
          },
          {
            name: 'gyro1',
            type: 'float',
            isNullable: false,
          },
          {
            name: 'gyro2',
            type: 'float',
            isNullable: false,
          },
          {
            name: 'gyro3',
            type: 'float',
            isNullable: false,
          },
          {
            name: 'countSteps',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'date',
            type: 'timestamp',
            isNullable: false,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('data');
  }
}

export default DataMigration1587763559394;
