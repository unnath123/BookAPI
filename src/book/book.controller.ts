import { Controller, Post, Get, Put, Body, Delete, Param } from "@nestjs/common";
import { BookService } from "./book.service";
import { Book } from "./data/book.dto";

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

    @Put("/updatebook")
    updatebook(@Body() book : Book) : string{
        return this.bookservice.updateBooksService(book)
    }

    @Delete("/deleteBook/:id")
    deleteBook(@Param("id") bookid : string ) : string{
        return this.bookservice.deleteBookService(bookid);
    }
}