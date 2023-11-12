import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateTodoDto {

    @IsNotEmpty()
    //mostra no swagger que essa propriedade deve ser usada
    @ApiProperty()
    task: string;

    @IsNotEmpty()
    //mostra no swagger que essa propriedade deve ser usada
    @ApiProperty()
    isDone: number;
}