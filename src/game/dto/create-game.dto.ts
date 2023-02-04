import { ApiProperty } from "@nestjs/swagger/dist/decorators";


export class createGameDto{
  @ApiProperty(
    {
      description: "Nome do jogo",
      example: "God of War"
    }
  )
  title: string;
  CoverImageUrl: string;
  Description: string;
  Year: number;
  ImdbScore: number;
  TrailerYouTubeUrl: string;
  GameplayYouTubeUrl:string;
}