import { User } from './../models/User';
import { Repository } from "typeorm";

export class UserService {
  constructor(private repo: Repository<User>) {
    this.repo = User.getRepository();
  }
}