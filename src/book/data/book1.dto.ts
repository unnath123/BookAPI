import { IsNumber, IsString } from 'class-validator';

export class Bookdto {
    @IsNumber({}, { message: 'ID must be a number' })
    id: number;

    @IsString({ message: 'Name must be a string' })
    name: string;
}