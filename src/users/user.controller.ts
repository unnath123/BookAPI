import { Controller, Get, Post, UseGuards, Request } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";


@Controller("/app")
export class UserController{
    constructor(){}

    @Post('/path')
    @UseGuards(AuthGuard('local'))
    getuser(@Request() req) : string{
        return req.user
    }
}