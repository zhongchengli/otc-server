import { User } from '../entity/User';
import { Repository, UpdateResult } from "typeorm";
import { Query } from 'type-graphql';
import { UserInput } from '../inputs/UserInput';

export class UserService {
  constructor(private readonly repo: Repository<User>) {
  }

  async getAllUsers(): Promise<User[]> {
    return await this.repo.find();
  }

  async getUserById(id: string): Promise<User | undefined> {
    return await this.repo.findOne({ where: { id } });
  }

  async updateUser(id: number, user: UserInput): Promise<UpdateResult> {
    return await this.repo.update({ id }, user);
  }
}