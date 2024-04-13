import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { PlayerService } from "../player.service";
import { UnauthorizedException,Injectable } from "@nestjs/common";

@Injectable()
export class localPassportStrategy extends PassportStrategy(Strategy){
    constructor(private readonly playerService : PlayerService){
        super();
    }
    
    validate(username: string, password: string){
        // console.log("hi",username)
        const user = this.playerService.getUsebyuserName(username);

        if(user === undefined){
            throw new UnauthorizedException();
        }
        else if(password === user.password){
            return user
        }
        else if(password !== user.password){
            throw new UnauthorizedException();
        }
    }
} 