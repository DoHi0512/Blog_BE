import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PostEntity {
  @PrimaryGeneratedColumn()
  postId: number;

  @Column({ length: 10000 })
  content: string;

  @Column()
  title: string;

  @Column()
  preview: string;

  @Column()
  view: string;

  @Column()
  date: string;

  @Column('simple-array')
  tag: string[];
}
