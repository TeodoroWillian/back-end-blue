import {Body, Controller, Get, Post} from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger/dist/decorators";
import { createGameDto } from "./dto/create-game.dto";
import { GameService } from "./game.service";

@ApiTags('game')
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