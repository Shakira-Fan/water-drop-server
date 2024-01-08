import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsNotEmpty } from 'class-validator';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({
    comment: '名稱',
    default: '',
  })
  @IsNotEmpty()
  //名字不能為空值，跟nullable的差別是在類外層就已經包裹住了
  name: string;

  @Column({
    comment: '描述訊息',
    default: '',
  })
  desc: string;

  @Column({
    comment: '手機',
    nullable: true,
  })
  tel: string;

  //nullable在數據庫裡可以是為空的
  @Column({
    comment: '密碼',
    nullable: true,
  })
  password: string;

  @Column({
    comment: '帳號',
    nullable: true,
  })
  account: string;
}
