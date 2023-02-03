import { Injectable } from "@nestjs/common";
import { createGameDto } from "./dto/create-game.dto";
import { Game} from "./entities/game.entity";


@Injectable()
export class GameService {

  games: Game[] = [];
  
  findAll() {
    return this.games;
  }

  create(createGameDto: createGameDto) {
    const game: Game = {id: 'random_id', ...createGameDto}
    this.games.push(game)
    return game;
  }

}