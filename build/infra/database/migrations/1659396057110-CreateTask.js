"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateTask1659396057110 = void 0;

var _typeorm = require("typeorm");

class CreateTask1659396057110 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: 'tasks',
      columns: [{
        name: 'id',
        type: 'uuid',
        isPrimary: true
      }, {
        name: 'title',
        type: 'varchar'
      }, {
        name: 'completed',
        type: 'boolean',
        default: false
      }, {
        name: 'task_id',
        type: 'uuid'
      }, {
        name: 'created_at',
        type: 'timestamp',
        default: 'now()'
      }, {
        name: 'updated_at',
        type: 'timestamp',
        default: 'now()'
      }],
      foreignKeys: [{
        name: 'taskByUser',
        referencedTableName: 'users',
        referencedColumnNames: ['id'],
        columnNames: ['task_id'],
        onDelete: 'SET NULL',
        onUpdate: 'SET NULL'
      }]
    }));
  }

  async down(queryRunner) {
    await queryRunner.dropTable('tasks');
  }

}

exports.CreateTask1659396057110 = CreateTask1659396057110;