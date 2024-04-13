import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import {Strategy} from 'passport-local'
import { UserService } from "src/users/user.service";

@Injectable()
export class passportLocalStrategy extends PassportStrategy(Strategy){
    constructor(private readonly userService : UserService){
        super();
    }
    
    validate(username: string, password: string){
        console.log("hi",username)
        const user = this.userService.getUserByUserName(username);

        if(user === undefined) throw new UnauthorizedException();
        if(user.password === password) return user 
    }
}