import { Controller, Post, Get, Put, Body, Delete, Param, ParseIntPipe, ValidationPipe, BadRequestException, UseFilters, UseGuards } from "@nestjs/common";
import { BookService } from "./book.service";
import { Book } from "./data/book.dto";
// import { BookPipe } from "./book.bookpipe";
import { Bookdto } from "./data/book1.dto";
import { BookException } from "src/book/book.exception.filter";
import { BookGuard } from "./book.guard";

@Controller("book")
export class BookController{
    constructor(private bookservice : BookService){}

    @Get("/getAllBooks")
    getAllBooks() : Book[] {
        return this.bookservice.getallBooks()
    }

    @Post("/addbook")
    addBook(@Body() book : Book): string {
        return this.bookservice.addBooksService(book)
    }

    @Post('/testPipes/:id')
    testpipes(@Param("id", ParseIntPipe) testID : number) : string{
        return "test passed 1"
    }

    @Post("/addpipepipe")
    testpipe(@Body(new ValidationPipe()) book: Bookdto ) : any{
        return "test passed"
    }

    @Get("/testguard")
    @UseGuards(BookGuard)
    testGuards(): any{
        return "test passed"
    }

    @Get("/addpipe")
    @UseFilters(BookException)
    testExcp(): any{
        throw new BadRequestException()
        return "test passed"
    }

    @Put("/updatebook")
    updatebook(@Body() book : Book) : string{
        return this.bookservice.updateBooksService(book)
    }

    @Delete("/deleteBook/:id")
    deleteBook(@Param("id") bookid : string ) : string{
        return this.bookservice.deleteBookService(bookid);
    }
}