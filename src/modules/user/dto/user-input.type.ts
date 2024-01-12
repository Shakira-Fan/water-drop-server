import { Field, InputType } from '@nestjs/graphql';

@InputType()
//輸入對象的裝飾器
export class UserInput {
  @Field()
  name: string;
  @Field()
  desc: string;
}
