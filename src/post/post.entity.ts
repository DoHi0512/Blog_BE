import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
const now = new Date();
const today =
  now.getFullYear().toString() +
  '-' +
  (now.getMonth() + 1).toString() +
  '-' +
  now.getDate().toString();
@Entity()
export class PostEntity {
  @PrimaryGeneratedColumn()
  postId: number;

  @Column({ length: 10000 })
  content: string;

  @Column()
  title: string;

  @Column({ default: 0 })
  view: number;

  @Column({ default: today })
  date: string;

  @Column('simple-array')
  tag: string[];

  @Column()
  image: string;
}
