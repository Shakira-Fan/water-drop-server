import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeepPartial } from 'typeorm';
import { User } from './models/user.entity';

@Injectable()
//依賴注入的對象
export class UserService {
  //在類裡面增加構造器，注入專屬User的repository。
  constructor(
    @InjectRepository(User) private UserRepository: Repository<User>,
  ) {}

  //新增一個用戶
  //DeepPartial 把User的屬性都加問號，可以都傳，或是可以都不傳
  async create(entity: DeepPartial<User>): Promise<boolean> {
    const res = await this.UserRepository.insert(entity);
    if (res && res.raw.affectedRows > 0) {
      return true;
    }
    return false;
  }
}
