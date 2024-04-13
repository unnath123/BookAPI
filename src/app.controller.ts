import { Controller, Post, UseGuards,Request, Get } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Player } from "./JWTPRACT/player.entity";
import { authService } from "./JWTPRACT/authenticate/auth.service";

@Controller("wjt")
export class appController {
    constructor(private readonly authservice : authService){

    }

    @Post('/path')
    @UseGuards(AuthGuard('local'))
    UserLogin(@Request() req) : string{
        const token = this.authservice.generateToken(req.user)
        return token
    }

    @Get('/dev')
    @UseGuards(AuthGuard('jwt'))
    getuser(@Request() req) : string{
       return "you have entered dev space"
    }
}

