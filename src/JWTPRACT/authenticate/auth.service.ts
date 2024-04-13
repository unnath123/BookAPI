import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Player } from "../player.entity";

@Injectable()
export class authService{
    constructor(private readonly jwtService : JwtService){

    }

    generateToken(payload : Player): string{
        return this.jwtService.sign(payload);
    }
}