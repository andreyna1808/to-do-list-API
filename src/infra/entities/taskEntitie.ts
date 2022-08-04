/* eslint-disable import/no-extraneous-dependencies */
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

import UserEntitie from './userEntitie';

@Entity('tasks')
export default class TaskEntitie {
  @PrimaryColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  completed: boolean;

  @JoinColumn({ name: 'task_id' })
  @ManyToOne(() => UserEntitie)
  users: UserEntitie;

  @Column()
  task_id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
