import { Injectable } from "@nestjs/common";
import { Book } from "./data/book.dto";
import { v4 as uuidv4 } from "uuid"

@Injectable()
export class BookService{
    public books : Book[] = [];

    //addBooks
    addBooksService(book : Book) : string{
        book.id = uuidv4();
        this.books.push(book);
        return "Book added successfully"
    }

    //getAllbooks
    getallBooks() : Book[]{
        return this.books
    }

    //update
    updateBooksService(book : Book) : string{
        // let index = this.books.findIndex((ele)=>{
        //     return ele.id == book.id;
        // })
        // this.books[index] = book;
        this.books = this.books.map((ele)=>(
            ele.id == book.id ? book : ele
        ))
        return "Book updated";
    }

    //deleteBook
    deleteBookService(bookId : string) : string {
        this.books = this.books.filter(ele=>ele.id!=bookId);
        return "Book delete successfully"
    }


}