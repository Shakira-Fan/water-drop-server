import { Controller, Get } from '@nestjs/common';
import { UserService } from './modules/user/user.service';

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
}
