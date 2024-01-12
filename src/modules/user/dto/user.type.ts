import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
//輸出對象的裝飾器
export class UserType {
  @Field()
  id?: string;
  @Field()
  name?: string;
  @Field()
  desc: string;
  //增加description是為了讓自動生成的文件有清楚的註釋
  @Field({ description: '帳戶訊息' })
  account?: string;
}
