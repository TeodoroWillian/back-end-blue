import { Injectable } from "@nestjs/common";
import { createUSerDto } from "./dto/create-user.dto";


@Injectable()
export class UserService {
  
  findAll() {
    return 'Buscar todos os Users';
  }

  create(createUserDto: createUSerDto) {
    return 'Criar um jogo' + JSON.stringify(createUserDto);
  }

}