import { User } from '../entity/User';
import { UserService } from './../services/UserService';
import { Arg, Int, Mutation, Query, Resolver } from "type-graphql";
import { UserInput } from '../inputs/UserInput';

@Resolver()
export class UserResolver {

  constructor(private service: UserService) {
    this.service = new UserService(User.getRepository());
  }

  @Query(() => String)
  helloWorld() {
    return 'Hellow World!';
  }

  @Query(() => [User])
  async users(): Promise<User[]> {
    return await this.service.getAllUsers();
  }

  @Query(() => User)
  async user(@Arg("id") id: String): Promise<User | undefined> {
    return await this.service.getUserById(id.toString());
  }

  @Mutation(() => Boolean)
  async updateUser(
    @Arg("id", () => Int) id: number,
    @Arg("input", () => UserInput) input: UserInput
  ) {

    console.log('user in resolver = ', input);
    const result = await this.service.updateUser(id, input);
    console.log('result in resolver = ', result);
    return true;
  }
}