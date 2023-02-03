import { Injectable } from "@nestjs/common";
import { createUSerDto } from "./dto/create-user.dto";
import { User } from "./entities/user.entity";


@Injectable()
export class UserService {

  users: User [] = [];
  
  findAll() {
    return this.users;
  }

  create(createUserDto: createUSerDto) {
    const user: User = {id: 'random_Id', ...createUserDto}
    this.users.push(user)
    return  user
  }

}