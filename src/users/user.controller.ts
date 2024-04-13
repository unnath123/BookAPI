import { Controller, Get, Post, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";


@Controller("/app")
export class UserController{
    constructor(){}

    @Post('/path')
    @UseGuards(AuthGuard('local'))
    getuser() : string{
        return "private data"
    }
}