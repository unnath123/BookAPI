import { Injectable } from "@nestjs/common";
import { Player } from "./player.entity";

@Injectable()
export class PlayerService{

    public players : Player[] = [
        {
            username : "user1",
            password : "user1123",
            email: "user1@gmail.com",
            age:10
        },
        {
            username : "user2",
            password : "user2123",
            email: "user2@gmail.com",
            age:10
        },
        {
            username : "user3",
            password : "user3123",
            email: "user3@gmail.com",
            age:10
        },
        {
            username : "user4",
            password : "user4123",
            email: "user4@gmail.com",
            age:10
        }
    ]

    getUsebyuserName(username: string) : Player{
        return this.players.find((player)=>player.username === username)
    }
}