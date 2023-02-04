import { ApiProperty } from "@nestjs/swagger/dist/decorators";

export class createUSerDto{
  @ApiProperty()
  Name: string;
  Email: string;
  Password: string;
  CPF: number;
  isAdmin: boolean;
}