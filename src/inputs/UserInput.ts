import { Field, InputType } from "type-graphql";

@InputType()
export class UserInput {

  @Field({ nullable: false })
  firstName: string;

  @Field({ nullable: false })
  lastName: string;

  @Field({ nullable: false })
  email: string;
}