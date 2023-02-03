import {Body, Controller, Get, Post} from "@nestjs/common";
import { createGameDto } from "./dto/create-game.dto";
import { GameService } from "./game.service";


@Controller('game')
export class GameController {

  constructor(private gameService: GameService) {

  }

  @Get()
  findAll(){
    return this.gameService.findAll();
  }

  @Post()
  create(@Body() createGameDto: createGameDto){
    return this.gameService.create(createGameDto);
  }
}