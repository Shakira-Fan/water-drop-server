import { Controller, Get } from '@nestjs/common';
import { UserService } from './modules/user/user.service';
import { User } from './modules/user/models/user.entity';

@Controller()
export class AppController {
  constructor(private readonly userService: UserService) {}

  @Get('/create')
  async create(): Promise<boolean> {
    return await this.userService.create({
      name: '莉莉管理員',
      desc: '管理員',
      tel: '880888',
      password: '123456',
      account: 'admin',
    });
  }

  @Get('/delete')
  async deleteUser(): Promise<boolean> {
    return await this.userService.deleteUser(
      '6c5a1906-4829-47b6-b95f-827df3346836',
    );
  }

  @Get('/update')
  async updateUser(): Promise<boolean> {
    return await this.userService.updateUser(
      '55ce1855-3bb4-4096-9c29-a9dc8e86b7cd',
      {
        name: '莉莉update管理員',
        desc: '管理員22',
      },
    );
  }

  @Get('/find')
  async findUser(): Promise<User> {
    return await this.userService.findUser(
      '55ce1855-3bb4-4096-9c29-a9dc8e86b7cd',
    );
  }
}
