import { Injectable } from "@nestjs/common";
import { createGameDto } from "./dto/create-game.dto";


@Injectable()
export class GameService {
  
  findAll() {
    return 'Buscar todos os Games';
  }

  create(createGameDto: createGameDto) {
    return 'Criar um jogo' + JSON.stringify(createGameDto);
  }

}