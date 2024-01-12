import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';
import { UserInput } from './dto/user-input.type';
import { UserType } from './dto/user.type';

//會有GraphQLError: Query root type must be provided.報錯是因為至少要有一個@query
@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  //增加description是為了讓自動生成的文件有清楚的註釋
  @Mutation(() => Boolean, { description: '新增用戶' })
  async create(@Args('params') params: UserInput): Promise<boolean> {
    return await this.userService.create(params);
  }

  @Query(() => UserType, { description: '使用ID查詢用戶' })
  async findUser(@Args('id') id: string): Promise<UserType> {
    return await this.userService.findUser(id);
  }

  @Mutation(() => Boolean, { description: '更新用戶' })
  async updateUser(
    @Args('id') id: string,
    @Args('params') params: UserInput,
  ): Promise<boolean> {
    return await this.userService.updateUser(id, params);
  }

  @Mutation(() => Boolean, { description: '刪除一個用戶' })
  async deleteUser(@Args('id') id: string): Promise<boolean> {
    return await this.userService.deleteUser(id);
  }
}
