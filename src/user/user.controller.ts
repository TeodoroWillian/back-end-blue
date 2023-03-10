import {Body, Controller, Get, Post} from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger/dist/decorators";
import { createUSerDto } from "./dto/create-user.dto";
import { UserService } from "./user.service";

@ApiTags('user')
@Controller('user')
export class UserController {

  constructor(private userService: UserService) {

  }

  @Get()
  findAll(){
    return this.userService.findAll();
  }

  @Post()
  create(@Body() createUserDto: createUSerDto){
    return this.userService.create(createUserDto);
  }
}