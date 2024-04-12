import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import { Book } from './data/book.dto';
import { Bookdto } from './data/book1.dto';
import { plainToClass, plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';

@Injectable()
export class BookPipe implements PipeTransform {
 async transform(value: any, metadata: ArgumentMetadata) : Promise<any> {

    const bookclass = plainToClass(Bookdto, value)
    const errors = await validate(bookclass)
  
    if(errors.length > 0){
        throw new BadRequestException('validation failed', JSON.stringify(errors))
    } 
    return value
  }
}


