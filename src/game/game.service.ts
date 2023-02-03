import { Injectable } from "@nestjs/common";


@Injectable()
export class GameService {
  
  findAll() {
    return 'Buscar todos os Games';
  }

  create() {
    return 'Game Criado';
  }

}